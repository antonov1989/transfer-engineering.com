<div class="box-body">
    <div class="form-group {{$errors->has('name') ? 'has-error' : ''}}">
        {!! Form::label('name', 'Name', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('name', isset($stadium->name) ? $stadium->name : null, ['class' => 'form-control', 'placeholder' => 'Name']) !!}
            @if ($errors->has('name'))
                <span class="help-block">{{ $errors->first('name') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('address') ? 'has-error' : ''}}">
        {!! Form::label('address', 'Address', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('address', isset($stadium->address) ? $stadium->address : null, ['class' => 'form-control', 'placeholder' => 'Address']) !!}
            @if ($errors->has('address'))
                <span class="help-block">{{ $errors->first('address') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('phone') ? 'has-error' : ''}}">
        {!! Form::label('phone', 'Phone', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('phone', isset($stadium->phone) ? $stadium->phone : null, ['class' => 'form-control', 'placeholder' => 'Phone']) !!}
            @if ($errors->has('phone'))
                <span class="help-block">{{ $errors->first('phone') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('site') ? 'has-error' : ''}}">
        {!! Form::label('site', 'Site', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('site', isset($stadium->site) ? $stadium->site : null, ['class' => 'form-control', 'placeholder' => 'Site']) !!}
            @if ($errors->has('site'))
                <span class="help-block">{{ $errors->first('site') }}</span>
            @endif
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('status', 'Status', ['class' => 'col-md-2 col-sm-2 control-label status-form-label']) !!}
        <div class="col-md-4 col-sm-10">
            <label class="switch checkbox">
                {!! Form::checkbox('status', null, (bool) $stadium->status) !!}
            </label>
        </div>
    </div> 
</div>
<div class="box-footer">
    <div class="row">
        <div class="col-sm-offset-2 col-sm-10">
            {!! Form::button( 'Save', ['type' => 'submit', 'class' => 'btn btn-success save-link-button']) !!}
            <a class="btn btn-default" href="{{ route('admin.stadiums') }}">Cancel</a>
        </div>
    </div>
</div>
