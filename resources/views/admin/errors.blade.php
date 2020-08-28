@if ($errors->any())
    <div class="col-xs-12 pb-3 error-wrapper">
        <div class="alert alert-danger alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h4><i class="icon fa fa-ban"></i> Error!</h4>
            <p>Please check following errors</p>
        </div>
    </div>
@endif