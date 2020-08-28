<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Config\Repository as Config;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\View\Factory as ViewFactory;
use App\Repositories\Language\LanguageRepository;
use App\Helpers\UriLocalizer;

class TranslationMiddleware
{
    public function __construct(UriLocalizer $uriLocalizer, LanguageRepository $languageRepository, Config $config, ViewFactory $viewFactory, Application $app)
    {
        $this->uriLocalizer       = $uriLocalizer;
        $this->languageRepository = $languageRepository;
        $this->config             = $config;
        $this->viewFactory        = $viewFactory;
        $this->app                = $app;
    }

    /**
     * Handle an incoming request.
     *
     *  @param  Request  $request
     *  @param Closure $next
     *  @param  integer $segment     Index of the segment containing locale info
     *  @return mixed
     */
    public function handle($request, Closure $next, $segment = 0)
    {
        // Ignores all non GET requests:
        if ($request->method() !== 'GET') {
            return $next($request);
        }

        $currentUrl    = $request->getUri();
        $clearUrl = $this->uriLocalizer->cleanUrl($currentUrl, $segment);
        $uriLocale     = $this->uriLocalizer->getLocaleFromUrl($currentUrl, $segment);
        $defaultLocale = config('app.locale');

        if($uriLocale === $defaultLocale){
            $url = $this->uriLocalizer->localize($currentUrl, $uriLocale, $defaultLocale, $segment);
            return redirect($url);
        }

        $uriLocale = $uriLocale ? $uriLocale : $defaultLocale;
        // If a locale was set in the url:
        if ($uriLocale) {
            $currentLanguage     = $this->languageRepository->findActiveByLocale($uriLocale);
            $selectableLanguages = $this->languageRepository->allActiveExcept('');
            $altLocalizedUrls    = [];
            $localeFromCookie = $request->cookie('locale');

            //cookie locale is higher than url locale
            if(!empty($localeFromCookie) && $localeFromCookie !== $uriLocale && in_array($localeFromCookie, $this->uriLocalizer->availableLocales)) {
                return redirect()->to($this->uriLocalizer->localize($currentUrl, $localeFromCookie, $segment));
            }

            // If no locale was set in the cookie, check the browser's locale:
            $browserLocale = substr($request->server('HTTP_ACCEPT_LANGUAGE'), 0, 2);
            if (empty($localeFromCookie) && $browserLocale !== $uriLocale && in_array($browserLocale, $this->uriLocalizer->availableLocales)) {
                return redirect()->to($this->uriLocalizer->localize($currentUrl, $browserLocale, $segment));
            }

            foreach ($selectableLanguages as $lang) {
                $altLocalizedUrls[] = [
                    'locale' => $lang->locale,
                    'name'   => $lang->name,
                    'url'    => $this->uriLocalizer->localize($currentUrl, $lang->locale, $defaultLocale, $segment),
                ];
            }

            // Set app locale
            $this->app->setLocale($uriLocale);

            // Share language variable with views:
            $this->viewFactory->share('currentLanguage', $currentLanguage);
            $this->viewFactory->share('selectableLanguages', $selectableLanguages);
            $this->viewFactory->share('altLocalizedUrls', $altLocalizedUrls);
            $this->viewFactory->share('nonLocalizedUrl', $clearUrl);
            $this->viewFactory->share('activeLocales', $this->languageRepository->allActive());

            //todo: To fix. the locale in the session is overwritten by non-localized api requests
            // Set locale in session:
            if ($request->hasSession() && $request->session()->get('waavi.translation.locale') !== $uriLocale) {
                $request->session()->put('waavi.translation.locale', $uriLocale);
            }
            return $next($request);
        }

        // If no locale was set in the url, check the session locale
        if ($request->hasSession() && $sessionLocale = $request->session()->get('waavi.translation.locale')) {
            if ($this->languageRepository->findActiveByLocale($sessionLocale)) {
                return redirect()->to($this->uriLocalizer->localize($currentUrl, $sessionLocale, $segment));
            }
        }

        // If not, redirect to the default locale:
        // Keep flash data.
        if ($request->hasSession()) {
            $request->session()->reflash();
        }

        return redirect()->to($this->uriLocalizer->localize($currentUrl, $defaultLocale, $segment));
    }
}
