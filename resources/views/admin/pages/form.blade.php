<div class="box-body">
    <div class="form-group {{$errors->has('title') ? 'has-error' : ''}}">
        {!! Form::label('title', 'Title', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-sm-10 col-xs-12">
            {!! Form::text('title', isset($page->title) ? $page->title : null, ['class' => 'form-control', 'placeholder' => 'Title']) !!}
            @if ($errors->has('title'))
                <span class="help-block">{{ $errors->first('title') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('description') ? 'has-error' : ''}}">
        {!! Form::label('description', 'Description', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-sm-10 col-xs-12">
            {!! Form::text('description', isset($page->description) ? $page->description : null, ['class' => 'form-control', 'placeholder' => 'Description']) !!}
            @if ($errors->has('description'))
                <span class="help-block">{{ $errors->first('description') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('keywords') ? 'has-error' : ''}}">
        {!! Form::label('keywords', 'Keywords', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-sm-10 col-xs-12">
            {!! Form::text('keywords', isset($page->keywords) ? $page->keywords : null, ['class' => 'form-control', 'placeholder' => 'Keywords']) !!}
            @if ($errors->has('keywords'))
                <span class="help-block">{{ $errors->first('keywords') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('h1') ? 'has-error' : ''}}">
        {!! Form::label('h1', 'H1', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-sm-10 col-xs-12">
            {!! Form::text('h1', isset($page->h1) ? $page->h1 : null, ['class' => 'form-control', 'placeholder' => 'H1']) !!}
            @if ($errors->has('h1'))
                <span class="help-block">{{ $errors->first('h1') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('Content') ? 'has-error' : ''}}">
        {!! Form::label('content', 'Content', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-sm-10 col-xs-12">
            {!! Form::textarea('content', isset($page->content) ? $page->content : null, ['class' => 'form-control editorContent', 'id' => 'editorContent', 'placeholder' => 'Content']) !!}
            @if ($errors->has('h1'))
                <span class="help-block">{{ $errors->first('content') }}</span>
            @endif
        </div>
    </div>
</div>
<div class="box-footer">
    <div class="row">
        <div class="col-sm-offset-2 col-sm-10">
            {!! Form::button( 'Save', ['type' => 'submit', 'class' => 'btn btn-success save-link-button']) !!}
            <a class="btn btn-default" href="{{ route('admin.pages') }}">Cancel</a>
        </div>
    </div>
</div>
