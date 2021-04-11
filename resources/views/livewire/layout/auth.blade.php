<!DOCTYPE html>
<html lang="en">
<head>
    @livewire('layout.shared.title-meta', ['title' => $title])
    @livewire('layout.shared.head-css')
    @livewireStyles
</head>

<body class="authentication-bg authentication-bg-pattern">
@yield('content')
<footer class="footer footer-alt">
    Copyright &copy; <script>document.write(new Date().getFullYear())</script> <a href="" class="text-white-50">Blog.</a> - Todos los derechos reservados
</footer>
@livewire('layout.shared.footer-script')
@livewireScripts
</body>
</html>
