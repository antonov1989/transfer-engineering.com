<div class="box-body">
    <div class="form-group {{$errors->has('user_name') ? 'has-error' : ''}}">
        {!! Form::label('user_name', 'Name', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('user_name', isset($xorder->user_name) ? $xorder->user_name : null, ['class' => 'form-control', 'placeholder' => 'Name']) !!}
            @if ($errors->has('user_name'))
                <span class="help-block">{{ $errors->first('user_name') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('Contact') ? 'has-error' : ''}}">
        {!! Form::label('user_contact', 'Contact', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('user_contact', isset($xorder->user_contact) ? $xorder->user_contact : null, ['class' => 'form-control', 'placeholder' => 'Contact']) !!}
            @if ($errors->has('user_contact'))
                <span class="help-block">{{ $errors->first('user_contact') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('user_info') ? 'has-error' : ''}}">
        {!! Form::label('user_info', 'Info', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('user_info', isset($xorder->user_info) ? $xorder->user_info : null, ['class' => 'form-control', 'placeholder' => 'Info']) !!}
            @if ($errors->has('user_info'))
                <span class="help-block">{{ $errors->first('user_info') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group">
        {!! Form::label('status', 'Status', ['class' => 'col-md-2 col-sm-2 control-label status-form-label']) !!}
        <div class="col-md-4 col-sm-10">
            <label class="switch checkbox">
                {!! Form::checkbox('status', null, (bool) $xorder->status) !!}
            </label>
        </div>
    </div> 
</div>
<div class="box-footer">
    <div class="row">
        <div class="col-sm-offset-2 col-sm-10">
            {!! Form::button( 'Save', ['type' => 'submit', 'class' => 'btn btn-success save-link-button']) !!}
            <a class="btn btn-default" href="{{ route('admin.xorders') }}">Cancel</a>
        </div>
    </div>
</div>
