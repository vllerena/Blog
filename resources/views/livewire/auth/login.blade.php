<div class="account-pages mt-5 mb-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-pattern">
                    <div class="card-body p-4">
                        <div class="text-center w-75 m-auto">
                            <div class="auth-logo">
                                <a href="{{route('index')}}" class="logo logo-dark text-center">
                                    <span class="logo-lg">
                                        <img src="{{asset('assets/images/logo-dark.png')}}" alt="" height="20">
                                    </span>
                                </a>
                            </div>
                            <p class="text-muted mb-4 mt-3">Ingrese su nombre de usuario y contraseña.</p>
                        </div>
                        @livewire('auth.login-form')
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
