<!DOCTYPE html>
<html lang="en">
<head>
    @livewire('layout.shared.title-meta', ['title' => "$title"])
    @livewire('layout.shared.head-css')
    @livewireStyles
</head>
<body @yield('body-extra')>
<div id="wrapper">
    @livewire('layout.shared.topbar')
    @livewire('layout.shared.left-sidebar')
    <div class="content-page">
        <div class="content">
            @yield('content')
        </div>
        @livewire('layout.shared.footer')
    </div>
</div>
@livewire('layout.shared.right-sidebar')
@livewire('layout.shared.footer-script')
@livewireScripts
</body>
</html>
