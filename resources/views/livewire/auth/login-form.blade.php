<form action="{{route('auth.login')}}" method="POST" autocomplete="off" novalidate>
    @csrf
    <div class="form-group mb-3">
        <label>Correo Electrónico</label>
        <input class="form-control  @if($errors->has('email')) is-invalid @endif" name="email"
               type="text"
               value="{{ old('email')}}"
               placeholder="Ingrese su correo electrónico"/>
        @if($errors->has('email'))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('email') }}</strong>
            </span>
        @endif
    </div>
    <div class="form-group mb-3">
        <label for="password">Password</label>
        <div class="input-group input-group-merge @if($errors->has('password')) is-invalid @endif">
            <input class="form-control @if($errors->has('password')) is-invalid @endif"
                   name="password" type="password" required=""
                   id="password" placeholder="Ingrese su contraseña"/>
            <div class="input-group-append" data-password="false">
                <div class="input-group-text">
                    <span class="password-eye"></span>
                </div>
            </div>
        </div>
        @if($errors->has('password'))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('password') }}</strong>
            </span>
        @endif
    </div>
    <div class="form-group mb-3">
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkbox-signin" checked>
            <label class="custom-control-label" for="checkbox-signin">Recordar Usuario</label>
        </div>
    </div>
    <div class="form-group mb-0 text-center">
        <button class="btn btn-primary btn-block" type="submit">Ingresar</button>
    </div>
</form>
