<?php

namespace App\Http\Controllers\Admin;

use App\Enums\YesNoStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateLanguageRequest;
use App\Http\Requests\UpdateLanguageRequest;
use App\Models\Language\Language;
use App\Services\TranslationService;
use App\ValueObjects\Admin\Translations\LanguageValueObject;
use App\ValueObjects\Admin\Translations\TranslationValueObject;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class TranslationsController
 * @package App\Http\Controllers\Admin
 */
class TranslationsController extends Controller
{

    /**
     * @var TranslationService
     */
    private $service;

    /**
     * LanguagesController constructor.
     * @param $service
     */
    public function __construct(TranslationService $service)
    {
        $this->service = $service;
    }

    /**
     * Show languages table
     *
     * @return Factory|View
     */
    public function index()
    {
        $list = Language::get();
        
        return view('admin.translations.index', [
            'list' => $list
        ]);
    }

    /**
     * @param Request $request
     * @param Language $language
     * @return Factory|View
     */
    public function edit(Request $request)
    {
        $language = Language::find($request->language);
        $locale = $language->locale;

        $data = $this->service->getLanguageByLocale($locale);

        $props = ['class' => 'form-control'];

        if (isset($data['language']) && $data['language']->isDefault())
        {
            $props['required'] = 'required';
        }

        $defaultWebsite = Language::find(Language::DEFAULT_LOCALE);
        
        $websites = [
            0 => $defaultWebsite
        ];
        $websiteId = 1;

        return view('admin.translations.edit', compact(
            'data',
            'props',
            'websites',
            'websiteId',
            'language',
            'defaultWebsite'
        ));
    }

    /**
     * @param UpdateLanguageRequest $request
     * @param Language $language
     * @return RedirectResponse
     */
    public function update(UpdateLanguageRequest $request)
    {
        $language = Language::find($request->language);
        
        $indexRoute = route('language.index');
        $editRoute  = route('language.edit.get', ['language' => $language->id]);

        $languageValueObj = $this->getDataForValueObj($language, $request, 'edit');

        try
        {
            $language = $this->service->update($language, $languageValueObj);
        }
        catch(\Exception $e)
        {
            return redirect()->to($editRoute)->withInput()->with(['error' => $e->getMessage()]);
        }

        return redirect()->to($indexRoute)
            ->with('notifications', ['type' => 'success', 'message' => 'Language '. $language->name .' has been saved']);
    }

    /**
     * @return Factory|View
     */
    public function create()
    {
        $data = ['default' => $this->service->getDefaultTranslations()];

        $websites = [];

        $websiteId = null;
        
        return view('admin.translations.create', compact('data', 'websites', 'websiteId'));
    }

    /**
     * @param CreateLanguageRequest $request
     * @return RedirectResponse
     */
    public function store(CreateLanguageRequest $request)
    {
        $indexRoute  = route('language.index');
        $createRoute = route('language.create');

        $languageValueObj = $this->getDataForValueObj(new Language(), $request, 'create');

        try
        {
            $language = $this->service->store($languageValueObj);
        }
        catch(\Exception $e)
        {
            var_dump($e->getMessage()); exit;
            return redirect()->to($createRoute)->withInput()->with(['error' => $e->getMessage()]);
        }

        return redirect()->to($indexRoute)
            ->with('notifications', ['type' => 'success', 'message' => 'Language ' . $language->name . ' has been created']);
    }

    /**
     * @param Language $language
     * @return ResponseFactory|JsonResponse|Response
     */
    public function switchStatus(Language $language)
    {
        try
        {
            $language = $this->service->switchLanguageStatus($language);

            return response()->json("Language {$language->name} status changed to {$language->enabled}");
        }
        catch(\Exception $e)
        {
            return response($e->getMessage(), 500);
        }
    }

    /**
     * @param Language $language
     * @return ResponseFactory|JsonResponse|Response
     */
    public function destroy(Language $language)
    {
        try
        {
            $name = $this->service->deleteLanguage($language);

            return response()->json("Language {$name} deleted");
        }
        catch(\Exception $e)
        {
            return response($e->getMessage(), 500);
        }
    }


}