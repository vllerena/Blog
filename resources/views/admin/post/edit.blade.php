@extends('livewire.layout.main', ['title' => 'Editar Posts'])

@section('css')
    <link href="{{asset('assets/libs/select2/select2.min.css')}}" rel="stylesheet" type="text/css"/>
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Editar Posts</h4>
                </div>
            </div>
        </div>
        <form action="{{route('admin.post.store')}}" method="POST"
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
                                    <label for="title">Título <span
                                            class="badge badge-soft-danger badge-pill">Requerido</span></label>
                                    <input type="text"
                                           class="form-control @error('title') is-invalid @enderror"
                                           name="title" id="title"
                                           placeholder="ej. Título"
                                           value="{{old('title', $post->title)}}">
                                    @error('title')
                                    <span class="invalid-feedback d-block" role="alert">
                                            <strong>{{$message}}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="image">Imagen <span
                                            class="badge badge-soft-danger badge-pill">Requerido</span></label>
                                    <input type="file"
                                           class="form-control @error('image') is-invalid @enderror"
                                           name="image" id="image"
                                           placeholder="ej. Imagen"
                                           value="{{old('image')}}">
                                    @error('image')
                                    <span class="invalid-feedback d-block" role="alert">
                                            <strong>{{$message}}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="status">Estado <span
                                            class="badge badge-soft-danger badge-pill">Requerido</span></label>
                                    <div class="checkbox checkbox-success checkbox-circle mb-2">
                                        <input id="status-10" name="status" type="checkbox" {{($post->status == true ? 'checked' : '' )}} >
                                        <label for="status-10">
                                            Publicado
                                        </label>
                                    </div>
                                    @error('status')
                                    <span class="invalid-feedback d-block" role="alert">
                                            <strong>{{$message}}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">Datos para
                                    Sistema</h5>
                                <div class="form-group">
                                    <label for="categorias">Categoría <span
                                            class="badge badge-soft-secondary badge-pill">Opcional</span></label>
                                    <select id="categorias" name="categorias" class="form-control text-uppercase"
                                            data-toggle="select2">
                                        @foreach($categorias as $c)
                                            <option value="{{$c->id}}">{{$c->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="tags">Tags <span
                                            class="badge badge-soft-secondary badge-pill">Opcional</span></label>
                                    <select id="tags" name="tags" class="form-control text-uppercase"
                                            data-toggle="select2">
                                        @foreach($tags as $t)
                                            <option value="{{$t->id}}">{{$t->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <h5 class="text-uppercase bg-light p-2 mt-2 mb-3">Contenido</h5>
                                @error('body')
                                <div class="alert alert-danger" role="alert">
                                    <i class="mdi mdi-block-helper mr-2"></i> <strong>{{$message}}</strong>
                                </div>
                                @enderror
                                <div class="form-group">
                                    <textarea id="body" name="body" class="form-control @error('image') is-invalid @enderror" placeholder="Escribe el contenido de tu post aqui!">{{$post->body}}</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <button type="submit"
                                        class="btn btn-primary waves-effect waves-light m-1"><i
                                        class="fe-check-circle mr-1"></i> Registrar
                                </button>
                                <a href="{{route('admin.post.index')}}"
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
    <script src="https://cdn.tiny.cloud/1/2ej9ohjvljx634nt1a0z94c25f45asnijkpx0cfntxg80zdv/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
    <script>
        $('[data-toggle="select2"]').select2();

        tinymce.init({
            selector: '#body',
            height: 600,
            plugins: 'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | media | forecolor backcolor',
            toolbar_mode: 'floating',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
        });
    </script>
@endsection
