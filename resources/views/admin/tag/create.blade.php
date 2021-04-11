@extends('livewire.layout.main', ['title' => 'Crear Tag'])

@section('css')
    <link href="{{asset('assets/libs/select2/select2.min.css')}}" rel="stylesheet" type="text/css"/>
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Crear Tag</h4>
                </div>
            </div>
        </div>
        <form action="{{route('admin.tag.store')}}" method="POST"
              enctype="multipart/form-data" novalidate>
            @csrf
            @method('POST')
            <div class="row">
                <div class="col-xl-12">
                    <div class="card-box">
                        <div class="row">
                            <div class="col-xl-6">
                                <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">Datos Principales</h5>
                                <div class="form-group">
                                    <label for="name">Nombre <span
                                            class="badge badge-soft-danger badge-pill">Requerido</span></label>
                                    <input type="text"
                                           class="form-control @error('name') is-invalid @enderror"
                                           name="name" id="name"
                                           placeholder="ej. Nombre"
                                           value="{{old('name')}}">
                                    @error('name')
                                    <span class="invalid-feedback d-block" role="alert">
                                            <strong>{{$message}}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">Datos para
                                    Sistema</h5>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <button type="submit"
                                        class="btn btn-primary waves-effect waves-light m-1"><i
                                        class="fe-check-circle mr-1"></i> Registrar
                                </button>
                                <a href="{{route('admin.tag.index')}}"
                                   class="btn btn-secondary waves-effect waves-light m-1">
                                    <i class="fe-check-circle mr-1"></i>
                                    Regresar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </div>
@endsection

@section('script')
    <script src="{{asset('assets/libs/select2/select2.min.js')}}"></script>
    <script>
        $('[data-toggle="select2"]').select2();
    </script>
@endsection
