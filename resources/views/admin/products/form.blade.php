<div class="box box-default">
    <div class="box-header with-border"><h2 class="box-title">Product info</h2></div>
    <div class="box-body">
        <div class="form-group {{$errors->has('name') ? 'has-error' : ''}}">
            {!! Form::label('name', 'Name', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
            <div class="col-sm-10 col-xs-12">
                {!! Form::text('name', isset($product->name) ? $product->name : null, ['class' => 'form-control', 'placeholder' => 'Name']) !!}
                @if ($errors->has('name'))
                    <span class="help-block">{{ $errors->first('name') }}</span>
                @endif
            </div>
        </div>

        <div class="form-group {{$errors->has('alias') ? 'has-error' : ''}}">
            {!! Form::label('alias', 'alias', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
            <div class="col-sm-10 col-xs-12">
                {!! Form::text('alias', isset($product->alias) ? $product->alias : null, ['class' => 'form-control', 'placeholder' => 'alias']) !!}
                @if ($errors->has('alias'))
                    <span class="help-block">{{ $errors->first('alias') }}</span>
                @endif
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('', 'Active', ['class' => 'col-md-2 col-sm-2 control-label status-form-label']) !!}
            <div class="col-md-10 col-sm-8">
                <label class="switch" style="padding-top: 8px">
                    @if(isset($product->active))
                        {!!Form::checkbox('active')!!}
                    @else
                        {!!Form::checkbox('active', 1, true)!!}
                    @endif
                    <span class="slider round"></span>
                </label>
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('', 'Image', ['class' => 'col-md-2 col-sm-2 control-label status-form-label']) !!}
            <div class="col-md-10 col-sm-8">
                @if(!empty($product->image))
                    <img width="100" src="/img/products/page/{{ $product->image }}" />
                @endif
                <input type="file" name="image">
                <label>size 660x430 px</label>
            </div>
        </div>
    </div>
    <div class="box-footer">
        <div class="row">
            <div class="col-sm-offset-2 col-sm-10">
                {!! Form::button( 'Save', ['type' => 'submit', 'class' => 'btn btn-success save-link-button']) !!}
                <a class="btn btn-default" href="{{ route('admin.products') }}">Cancel</a>
            </div>
        </div>
    </div>
</div>
<div class="box box-default">
    <div class="box-header with-border"><h2 class="box-title">Product translations</h2></div>
    <div class="box-body">
        @foreach ($langs as $lang)
            <div class="box-header with-border"><h4 class="box-title">{{ $lang->name }}</h4></div>
            <div class="box-body">
                {!! Form::hidden('translations[' . $lang->locale . '][id]',
                     isset($product_translation[$lang->locale]->id) ? $product_translation[$lang->locale]->id : null) !!}

                <div class="form-group {{$errors->has('translations[' . $lang->locale . '][meta_title]') ? 'has-error' : ''}}">
                    {!! Form::label('translations[' . $lang->locale . '][meta_title]', 'Meta Title', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
                    <div class="col-sm-10 col-xs-12">
                        {!! Form::text('translations[' . $lang->locale . '][meta_title]',
                            isset($product_translation[$lang->locale]->meta_title) ? $product_translation[$lang->locale]->meta_title : null,
                            ['class' => 'form-control', 'placeholder' => 'Meta Title']) !!}
                        @if ($errors->has('translations[' . $lang->locale . '][meta_title]'))
                            <span class="help-block">{{ $errors->first('translations[' . $lang->locale . '][meta_title]') }}</span>
                        @endif
                    </div>
                </div>

                <div class="form-group {{$errors->has('translations[' . $lang->locale . '][meta_description]') ? 'has-error' : ''}}">
                    {!! Form::label('translations[' . $lang->locale . '][meta_description]', 'Meta description', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
                    <div class="col-sm-10 col-xs-12">
                        {!! Form::text('translations[' . $lang->locale . '][meta_description]',
                            isset($product_translation[$lang->locale]->meta_description) ? $product_translation[$lang->locale]->meta_description : null,
                            ['class' => 'form-control', 'placeholder' => 'Meta description']) !!}
                        @if ($errors->has('translations[' . $lang->locale . '][meta_description]'))
                            <span class="help-block">{{ $errors->first('translations[' . $lang->locale . '][meta_description]') }}</span>
                        @endif
                    </div>
                </div>

                <div class="form-group {{$errors->has('translations[' . $lang->locale . '][meta_keywords]') ? 'has-error' : ''}}">
                    {!! Form::label('translations[' . $lang->locale . '][meta_keywords]', 'Meta keywords', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
                    <div class="col-sm-10 col-xs-12">
                        {!! Form::text('translations[' . $lang->locale . '][meta_keywords]',
                            isset($product_translation[$lang->locale]->meta_keywords) ? $product_translation[$lang->locale]->meta_keywords : null,
                            ['class' => 'form-control', 'placeholder' => 'Meta keywords']) !!}
                        @if ($errors->has('translations[' . $lang->locale . '][meta_keywords]'))
                            <span class="help-block">{{ $errors->first('translations[' . $lang->locale . '][meta_keywords]') }}</span>
                        @endif
                    </div>
                </div>

                <div class="form-group {{$errors->has('translations[' . $lang->locale . '][h1]') ? 'has-error' : ''}}">
                    {!! Form::label('translations[' . $lang->locale . '][h1]', 'Product Title', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
                    <div class="col-sm-10 col-xs-12">
                        {!! Form::text('translations[' . $lang->locale . '][h1]',
                            isset($product_translation[$lang->locale]->h1) ? $product_translation[$lang->locale]->h1 : null,
                            ['class' => 'form-control', 'placeholder' => 'Product Title']) !!}
                        @if ($errors->has('translations[' . $lang->locale . '][h1]'))
                            <span class="help-block">{{ $errors->first('translations[' . $lang->locale . '][h1]') }}</span>
                        @endif
                    </div>
                </div>

                <div class="form-group {{$errors->has('translations[' . $lang->locale . '][content]') ? 'has-error' : ''}}">
                    {!! Form::label('translations[' . $lang->locale . '][content]', 'Content', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
                    <div class="col-sm-10 col-xs-12">
                        {!! Form::textarea('translations[' . $lang->locale . '][content]',
                            isset($product_translation[$lang->locale]->content) ? $product_translation[$lang->locale]->content : null,
                            ['class' => 'form-control editorContent', 'id' => 'editorContent', 'placeholder' => 'Content']) !!}
                        @if ($errors->has('translations[' . $lang->locale . '][content]'))
                            <span class="help-block">{{ $errors->first('translations[' . $lang->locale . '][content]') }}</span>
                        @endif
                    </div>
                </div>
            </div>
        @endforeach
        {{--
        <div class="form-group {{$errors->has('keywords') ? 'has-error' : ''}}">
            {!! Form::label('keywords', 'Keywords', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
            <div class="col-sm-10 col-xs-12">
                {!! Form::text('keywords', isset($product->keywords) ? $product->keywords : null, ['class' => 'form-control', 'placeholder' => 'Keywords']) !!}
                @if ($errors->has('keywords'))
                    <span class="help-block">{{ $errors->first('keywords') }}</span>
                @endif
            </div>
        </div>

        <div class="form-group {{$errors->has('h1') ? 'has-error' : ''}}">
            {!! Form::label('h1', 'H1', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
            <div class="col-sm-10 col-xs-12">
                {!! Form::text('h1', isset($product->h1) ? $product->h1 : null, ['class' => 'form-control', 'placeholder' => 'H1']) !!}
                @if ($errors->has('h1'))
                    <span class="help-block">{{ $errors->first('h1') }}</span>
                @endif
            </div>
        </div>

        <div class="form-group {{$errors->has('Content') ? 'has-error' : ''}}">
            {!! Form::label('content', 'Content', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
            <div class="col-sm-10 col-xs-12">
                {!! Form::textarea('content', isset($product->content) ? $product->content : null, ['class' => 'form-control editorContent', 'id' => 'editorContent', 'placeholder' => 'Content']) !!}
                @if ($errors->has('h1'))
                    <span class="help-block">{{ $errors->first('content') }}</span>
                @endif
            </div>
        </div>--}}
    </div>
</div>
<div class="box-footer">
    <div class="row">
        <div class="col-sm-offset-2 col-sm-10">
            {!! Form::button( 'Save', ['type' => 'submit', 'class' => 'btn btn-success save-link-button']) !!}
            <a class="btn btn-default" href="{{ route('admin.products') }}">Cancel</a>
        </div>
    </div>
</div>
