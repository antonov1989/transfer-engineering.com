<?php /** @var \Waavi\Translation\Models\Language $language */?>
<div class="box box-default"@if (!count($websites) || (null !== $defaultWebsite && $websiteId == $defaultWebsite->id)) @else style="display: none;" @endif>
    <div class="box-body">
        <div class="form-group {!!$errors->has('locale') ? 'has-error' : ''!!}">
            {!! Form::label('locale', 'Locale (ISO 639-1)', ['class' => 'col-md-2 col-sm-2 control-label']) !!}
            <div class="col-md-10 col-sm-10">
                {!! Form::text('locale', old('locale'), ['class' => 'form-control', 'placeholder' => 'Ticker', 'maxlength' => 8, isset($data['language']) ? 'disabled' : '']) !!}
                @if($errors->has('locale'))
                    <span class="help-block">{!!$errors->first('locale')!!}</span>
                @endif
            </div>
        </div>

        <div class="form-group {!!$errors->has('name') ? ' has-error' : ''!!}">
            {!! Form::label('name', 'Name', ['class' => 'col-md-2 col-sm-2 control-label']) !!}
            <div class="col-md-10 col-sm-10">
                {!! Form::text('name', old('name'), ['class' => 'form-control', 'placeholder' => 'Name', 'maxlength' => 10]) !!}
                @if($errors->has('name'))
                    <span class="help-block">{!!$errors->first('name')!!}</span>
                @endif
            </div>
        </div>
        <div class="form-group {!!$errors->has('short_name') ? ' has-error' : ''!!}">
            {!! Form::label('short_name', 'Short Name', ['class' => 'col-md-2 col-sm-2 control-label']) !!}
            <div class="col-md-10 col-sm-10">
                {!! Form::text('short_name', old('short_name'), ['class' => 'form-control', 'placeholder' => 'Short Name', 'maxlength' => 10]) !!}
                @if($errors->has('short_name'))
                    <span class="help-block">{!!$errors->first('short_name')!!}</span>
                @endif
            </div>
        </div>
        <div class="form-group">
            {!! Form::label('', 'Enabled', ['class' => 'col-md-2 col-sm-2 control-label status-form-label']) !!}
            <div class="col-md-10 col-sm-8">
                @if(isset($data['language']) && $data['language']->isDefault())
                    <i class="fa fa-lock"></i> Default
                @else
                    <label class="switch">
                        @if(isset($data['language']))
                            {!!Form::checkbox('enabled')!!}
                        @else
                            {!!Form::checkbox('enabled', 1, true)!!}
                        @endif
                        <span class="slider round"></span>
                    </label>
                @endif
            </div>
        </div>
    </div>
    <div class="box-footer">
        <div class="row">
            <div class="col-sm-offset-2 col-sm-10">
                {!! Form::button(
                'Save Language',
                ['type' => 'submit', 'class' => 'btn btn-success save-coin-button']
            ) !!}
                <a class="btn btn-default" href="{!! route('language.index') !!}">Cancel</a>
            </div>
        </div>
    </div>
</div>
<div class="box box-default">
    <div class="box-header with-border"><h3 class="box-title">Edit Translations</h3></div>
    <div class="box-body">
        @foreach($data['default']  as $groupName => $group)
            <section class="group">
                <h4 class="page-header">{!!ucfirst(explode('_', $groupName)[0])!!}</h4>
                <div class="form-group translation-row header">
                    <div class="col-sm-4 text-right">Key</div>
                    <div class="col-sm-8">Translation</div>
                </div>
                @foreach($group as $item => $defaultTranslation)
                    <div class="form-group translation-row">
                        <div class="col-sm-4">
                            <div class="language-item text-right">
                                {!! $item !!}
                            </div>
                            <div class="translation-row-default text-right">
                                {!!$defaultTranslation->text!!}
                            </div>

                        </div>
                        <div class="col-sm-8">
                            @if (isset($data['language']->translations[$groupName]) && !empty($data['language']->translations[$groupName][$item])
                                && strlen($data['language']->translations[$groupName][$item]->text) > 150)
                                {!! Form::textarea('translations['. $groupName .']['. $item .'][text]',
                                    isset($data['language']->translations[$groupName]) && !empty($data['language']->translations[$groupName][$item]) ? $data['language']->translations[$groupName][$item]->text : '',
                                    !empty($props) ? $props : ['class' => 'form-control', 'maxlength' => 512]) !!}
                            @else
                                {!! Form::text('translations['. $groupName .']['. $item .'][text]',
                                    isset($data['language']->translations[$groupName]) && !empty($data['language']->translations[$groupName][$item]) ? $data['language']->translations[$groupName][$item]->text : '',
                                    !empty($props) ? $props : ['class' => 'form-control', 'maxlength' => 512]) !!}
                            @endif
                            {!! Form::hidden('translations['. $groupName .']['. $item .'][id]', isset($data['language']->translations[$groupName]) && !empty($data['language']->translations[$groupName][$item]) ? $data['language']->translations[$groupName][$item]->id : '') !!}
                            {!! Form::hidden('translations['. $groupName .']['. $item .'][group]', $groupName) !!}
                        </div>
                    </div>
                @endforeach
            </section>
        @endforeach


    </div>
    <div class="box-footer">
        <div class="row">
            <div class="col-sm-offset-4 col-sm-8">
                {!! Form::button(
                'Save Language',
                ['type' => 'submit', 'class' => 'btn btn-success save-coin-button']
            ) !!}
                <a class="btn btn-default" href="{!! route('language.index') !!}">Cancel</a>
            </div>
        </div>
    </div>
</div>
