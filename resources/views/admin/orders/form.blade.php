<div class="box-body">
    <div class="form-group {{$errors->has('status') ? 'has-error' : ''}}">
        {!! Form::label('status', 'Статус', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::select('status', $statusList, isset($order->status) ? $order->status : null, ['class' => 'form-control select2']) !!}
            @if ($errors->has('status'))
                <span class="help-block">{{ $errors->first('status') }}</span>
            @endif
        </div>
    </div>

    <div class="form-group {{$errors->has('user_name') ? 'has-error' : ''}}">
        {!! Form::label('user_name', 'Имя заказчика', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('user_name', isset($order->user_name) ? $order->user_name : null, ['class' => 'form-control', 'placeholder' => 'Введите имя заказчика']) !!}
            @if ($errors->has('user_name'))
                <span class="help-block">{{ $errors->first('user_name') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('user_phone') ? 'has-error' : ''}}">
        {!! Form::label('user_phone', 'Телефон заказчика', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('user_phone', isset($order->user_phone) ? $order->user_phone : null, ['class' => 'form-control', 'placeholder' => 'Введите телефон заказчика']) !!}
            @if ($errors->has('user_phone'))
                <span class="help-block">{{ $errors->first('user_phone') }}</span>
            @endif
        </div>
    </div>

    <div class="form-group {{$errors->has('stadium_id') ? 'has-error' : ''}}">
        {!! Form::label('stadium_id', 'Стадион', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::select('stadium_id', $stadiums, isset($order->stadium_id) ? $order->stadium_id : null, ['class' => 'form-control select2']) !!}
            @if ($errors->has('stadium_id'))
                <span class="help-block">{{ $errors->first('stadium_id') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group {{$errors->has('game_time_from_at') ? 'has-error' : ''}}">
        {!! Form::label('game_time_from_at', 'Начало игры', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            <div class="input-group date">
                <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                </div>

                {!! Form::text('game_time_from_at', isset($order->game_time_from_at) ? $order->game_time_from_at : null, ['class' => 'form-control datepicker']) !!}

                @if ($errors->has('game_time_from_at'))
                    <span class="help-block">{{ $errors->first('game_time_from_at') }}</span>
                @endif
            </div>
        </div>
    </div>

    <div class="form-group {{$errors->has('game_time_to_at') ? 'has-error' : ''}}">
        {!! Form::label('game_time_to_at', 'Конец игры', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            <div class="input-group date">
                <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                </div>

                {!! Form::text('game_time_to_at', isset($order->game_time_to_at) ? $order->game_time_to_at : null, ['class' => 'form-control datepicker']) !!}

                @if ($errors->has('game_time_to_at'))
                    <span class="help-block">{{ $errors->first('game_time_to_at') }}</span>
                @endif
            </div>
        </div>
    </div>

    <div class="form-group {{$errors->has('stadium_time_from_at') ? 'has-error' : ''}}">
        {!! Form::label('stadium_time_from_at', 'Начало брони стадиона', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            <div class="input-group date">
                <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                </div>

                {!! Form::text('stadium_time_from_at', isset($order->stadium_time_from_at) ? $order->stadium_time_from_at : null, ['class' => 'form-control datepicker']) !!}

                @if ($errors->has('stadium_time_from_at'))
                    <span class="help-block">{{ $errors->first('stadium_time_from_at') }}</span>
                @endif
            </div>
        </div>
    </div>

    <div class="form-group {{$errors->has('stadium_time_to_at') ? 'has-error' : ''}}">
        {!! Form::label('stadium_time_to_at', 'Конец брони стадиона', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            <div class="input-group date">
                <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                </div>

                {!! Form::text('stadium_time_to_at', isset($order->stadium_time_to_at) ? $order->stadium_time_to_at : null, ['class' => 'form-control datepicker']) !!}

                @if ($errors->has('stadium_time_to_at'))
                    <span class="help-block">{{ $errors->first('stadium_time_to_at') }}</span>
                @endif
            </div>
        </div>
    </div>

    <div class="form-group {{$errors->has('ball_count') ? 'has-error' : ''}}">
        {!! Form::label('ball_count', 'Кол-во мячей', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('ball_count', isset($order->ball_count) ? $order->ball_count : null, ['class' => 'form-control', 'placeholder' => 'Введите кол-во мячей']) !!}
            @if ($errors->has('ball_count'))
                <span class="help-block">{{ $errors->first('ball_count') }}</span>
            @endif
        </div>
    </div>

    <div class="form-group {{$errors->has('people_count') ? 'has-error' : ''}}">
        {!! Form::label('people_count', 'Кол-во человек', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('people_count', isset($order->people_count) ? $order->people_count : null, ['class' => 'form-control', 'placeholder' => 'Введите кол-во человек']) !!}
            @if ($errors->has('people_count'))
                <span class="help-block">{{ $errors->first('people_count') }}</span>
            @endif
        </div>
    </div>
    
    <div class="form-group">
        {!! Form::label('has_video_stream', 'Нужна видеосъемка?', ['class' => 'col-md-2 col-sm-2 control-label status-form-label']) !!}
        <div class="col-md-4 col-sm-10">
            <label class="switch checkbox">
                {!! Form::checkbox('has_video_stream', null, (bool) $order->has_video_stream) !!}
            </label>
        </div>
    </div>

    <div class="form-group {{$errors->has('order_pay') ? 'has-error' : ''}}">
        {!! Form::label('order_pay', 'Полная стоимость заказа', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('order_pay', isset($order->order_pay) ? $order->order_pay : null, ['class' => 'form-control', 'placeholder' => 'Введите полную стоимость заказа']) !!}
            @if ($errors->has('order_pay'))
                <span class="help-block">{{ $errors->first('order_pay') }}</span>
            @endif
        </div>
    </div>

    <div class="form-group {{$errors->has('stadium_pay') ? 'has-error' : ''}}">
        {!! Form::label('stadium_pay', 'Оплата за стадион', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('stadium_pay', isset($order->stadium_pay) ? $order->stadium_pay : null, ['class' => 'form-control', 'placeholder' => 'Введите оплату за стадион']) !!}
            @if ($errors->has('stadium_pay'))
                <span class="help-block">{{ $errors->first('stadium_pay') }}</span>
            @endif
        </div>
    </div>

    <div class="form-group {{$errors->has('video_pay') ? 'has-error' : ''}}">
        {!! Form::label('video_pay', 'Оплата за видео', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::text('video_pay', isset($order->video_pay) ? $order->video_pay : null, ['class' => 'form-control', 'placeholder' => 'Введите оплату за видео']) !!}
            @if ($errors->has('video_pay'))
                <span class="help-block">{{ $errors->first('video_pay') }}</span>
            @endif
        </div>
    </div>

    <div class="form-group {{$errors->has('info') ? 'has-error' : ''}}">
        {!! Form::label('info', 'Дополнительная информация', ['class' => 'col-md-2 col-sm-2 col-xs-5 control-label']) !!}
        <div class="col-md-4 col-sm-10 col-xs-12">
            {!! Form::textarea('info', isset($order->info) ? $order->info : null, ['class' => 'form-control', 'placeholder' => 'Введите дополнительную информацию']) !!}
            @if ($errors->has('info'))
                <span class="help-block">{{ $errors->first('info') }}</span>
            @endif
        </div>
    </div>
</div>
<div class="box-footer">
    <div class="row">
        <div class="col-sm-offset-2 col-sm-10">
            {!! Form::button( 'Save', ['type' => 'submit', 'class' => 'btn btn-success save-link-button']) !!}
            <a class="btn btn-default" href="{{ route('admin.orders') }}">Cancel</a>
        </div>
    </div>
</div>
