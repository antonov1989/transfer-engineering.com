<?php

namespace App\Providers;

use App\Http\ViewComposers\AppDataComposer;
use App\Http\ViewComposers\HtmlTagsComposer;
use App\Http\ViewComposers\TranslationsComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function boot()
    {
        View::composer(['index', 'header'], TranslationsComposer::class);
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}