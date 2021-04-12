@extends('livewire.layout.main', ['title' => 'Tags'])
@section('css')
    <link href="{{asset('assets/libs/jquery-toast-plugin/jquery-toast-plugin.min.css')}}" rel="stylesheet"
          type="text/css"/>
@endsection
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Gestionar Tags</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <div class="text-lg-left mt-3 mt-lg-0 mb-3 mr-2">
                        <a href="{{route('admin.tag.create')}}" type="button" class="btn btn-success waves-effect waves-light">
                            <span class="btn-label"><i class="mdi mdi-plus-circle"></i></span>Registar Tag
                        </a>
                    </div>
                    <div class="mb-2">
                        <div class="row">
                            <div class="col-12 text-sm-center form-inline">
                                <div class="form-group mr-2">
                                    <select id="demo-foo-filter-status" class="custom-select custom-select-sm">
                                        <option value="">Mostrar todos</option>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input id="demo-foo-search" type="text" placeholder="Buscar"
                                           class="form-control form-control-sm" autocomplete="on">
                                </div>
                                <div class="form-group ml-2">
                                    <a href="#" type="button"
                                       class="btn btn-soft-success btn-sm waves-effect waves-light">
                                        <span class="btn-label"><i class="mdi mdi-file-excel"></i></span>Excel
                                    </a>
                                </div>
                                <div class="form-group ml-2">
                                    <a href="#" type="button" class="btn btn-soft-info btn-sm waves-effect waves-light">
                                        <span class="btn-label"><i class="mdi mdi-file-document"></i></span>CSV
                                    </a>
                                </div>
                                <div class="form-group ml-2">
                                    <a href="#" type="button"
                                       class="btn btn-soft-danger btn-sm waves-effect waves-light">
                                        <span class="btn-label"><i class="mdi mdi-file-pdf"></i></span>PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table id="demo-foo-filtering" class="table table-bordered toggle-circle mb-0"
                               data-page-size="7">
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th data-hide="phone, tablet">Posts Asociados</th>
                                <th data-hide="phone, tablet">Slug</th>
                                <th data-hide="phone, tablet">Opciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($tags as $t)
                                <tr>
                                    <td>{{$t->name}}</td>
                                    <td>{{$t->posts->count()}}</td>
                                    <td>{{$t->slug}}</td>
                                    <td>
                                        <div class="row">
                                            <a href="{{ route('admin.tag.edit', ['tag' => $t]) }}" type="button"
                                               class="btn btn-soft-warning btn-sm waves-effect waves-light ml-2 mr-1">
                                                <span class="btn-label"><i class="mdi mdi-plus-circle"></i></span>Editar
                                            </a>
                                            <form action="{{route('admin.tag.destroy', ['tag' => $t])}}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-soft-danger btn-sm waves-effect waves-light ml-2 mr-1">
                                                    <span class="btn-label"><i class="mdi mdi-plus-circle"></i></span>Eliminar
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                            <tfoot>
                            <tr class="active">
                                <td colspan="4">
                                    <div class="text-right">
                                        <ul class="pagination pagination-rounded justify-content-end footable-pagination m-t-10 mb-0"></ul>
                                    </div>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('assets/libs/footable/footable.min.js')}}"></script>
    <script src="{{asset('assets/libs/jquery-toast-plugin/jquery-toast-plugin.min.js')}}"></script>
    <script src="{{asset('assets/js/pages/foo-tables.init.js')}}"></script>
    <script src="{{asset('assets/js/pages/toastr.init.js')}}"></script>
    @if (Session::has('status'))
        <script>
            document.addEventListener("DOMContentLoaded", function (event) {
                $.NotificationApp.send("¡Hecho!", '{{Session::get('status')}}', 'top-right', '#5ba035', 'success');
            });
        </script>
    @endif
@endsection
