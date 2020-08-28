<?php

namespace App\Http\Requests;

use App\Models\Language\Language;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateLanguageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'locale' => [
                'alpha_dash',
                'regex:/(^([a-zA-Z0-9_\-]+)$)/u',
                //Rule::unique('translator_languages', 'locale')
            ],
            'name' => [
                'required',
                // Rule::unique('translator_languages', 'name')
            ]
        ];
    }
}
