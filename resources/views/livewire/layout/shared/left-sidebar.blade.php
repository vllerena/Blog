<div class="left-side-menu">
    <div class="h-100" data-simplebar>
        <div class="user-box text-center">
            <img src="{{asset('assets/images/users/user-1.jpg')}}" alt="user-img" title="Mat Helme"
                 class="rounded-circle avatar-md">
            <div class="dropdown">
                <a href="javascript: void(0);" class="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                   data-toggle="dropdown">Geneva Kennedy</a>
                <div class="dropdown-menu user-pro-dropdown">
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-log-out mr-1"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
            <p class="text-muted">Admin Head</p>
        </div>
        <div id="sidebar-menu">
            <ul id="side-menu">
                <li>
                    <a href="{{route('admin.dashboard.index')}}">
                        <i data-feather="gift"></i>
                        <span> Dashboard </span>
                    </a>
                </li>
                <li>
                    <a href="#sidebarTags" data-toggle="collapse">
                        <i data-feather="users"></i>
                        <span> Tags </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarTags">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{route('admin.tag.index')}}">
                                    <i data-feather="gift" class="icons-xs mr-2"></i>
                                    <span> Listar Tags </span>
                                </a>
                            </li>
                            <li>
                                <a href="{{route('admin.tag.create')}}">
                                    <i data-feather="gift" class="icons-xs mr-2"></i>
                                    <span> Crear Tag </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#sidebarCat" data-toggle="collapse">
                        <i data-feather="users"></i>
                        <span> Categorias </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarCat">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{route('admin.categoria.index')}}">
                                    <i data-feather="gift" class="icons-xs mr-2"></i>
                                    <span> Listar Categorias </span>
                                </a>
                            </li>
                            <li>
                                <a href="{{route('admin.categoria.create')}}">
                                    <i data-feather="gift" class="icons-xs mr-2"></i>
                                    <span> Crear Categoria </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#sidebarPost" data-toggle="collapse">
                        <i data-feather="users"></i>
                        <span> Post </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarPost">
                        <ul class="nav-second-level">
                            <li>
                                <a href="{{route('admin.post.index')}}">
                                    <i data-feather="gift" class="icons-xs mr-2"></i>
                                    <span> Listar Post </span>
                                </a>
                            </li>
                            <li>
                                <a href="{{route('admin.post.create')}}">
                                    <i data-feather="gift" class="icons-xs mr-2"></i>
                                    <span> Crear Post </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
