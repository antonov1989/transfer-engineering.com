<?php

namespace App\Http\ViewComposers;

use App\Services\{SiteSettingsService};
use Illuminate\View\View;

class AppDataComposer
{
    public function __construct(SiteSettingsService $settingsService)
    {
        $this->settingsService = $settingsService;
    }

    public function compose(View $view)
    {
        $appData = [
            'translations' => __('main'),
        ];

        $view->with('appData', $appData);
    }
}
