<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use App\TableInfo\CategoriaTableInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class CategoriaController extends Controller
{
    public function index()
    {
        $categorias = Categoria::all();
        return view('admin.categoria.index', compact('categorias'));
    }

    public function create()
    {
        return view('admin.categoria.create');
    }

    public function store(Request $request)
    {
        $validate = $this->validar($request);
        $image = $request->file('image');
        $slug = Str::slug($request->name);
        if (isset($image)) {
            $date = Carbon::now()->toDateString();
            $imagename = $slug . '-' . $date . '-' . uniqid() . '.' . $image->getClientOriginalExtension();
            if (!Storage::disk('public')->exists('categoria')) {
                Storage::disk('public')->makeDirectory('categoria');
            }
            $categoria = Image::make($image)->resize(1600, 479)->save('foo.jpg');
            Storage::disk('public')->put('categoria/' . $imagename, $categoria);
            if (!Storage::disk('public')->exists('categoria/slider')) {
                Storage::disk('public')->makeDirectory('categoria/slider');
            }
            $slider = Image::make($image)->resize(500, 333)->save('foo.jpg');
            Storage::disk('public')->put('categoria/slider/' . $imagename, $slider);
        } else {
            $imagename = "default.png";
        }
        Categoria::create([
            CategoriaTableInfo::NAME => $validate[CategoriaTableInfo::NAME],
            CategoriaTableInfo::SLUG => $slug,
            CategoriaTableInfo::IMAGE => $imagename,
        ]);
        return redirect()->route('admin.categoria.index')->with('status', 'Categoria registrada correctamente.');
    }

    public function edit(Categoria $categoria)
    {
        return view('admin.categoria.edit', compact('categoria'));
    }

    public function update(Categoria $categoria, Request $request)
    {
        $validate = $this->validar($request);
        $categoria->update($validate);
        return redirect()->route('admin.categoria.index')->with('status', 'Categoria actualizada correctamente.');
    }

    public function destroy(Categoria $categoria)
    {
        Categoria::where(CategoriaTableInfo::ID, $categoria->id)->delete();
        return redirect()->route('admin.categoria.index')->with('status', 'Categoria eliminada correctamente.');

    }

    public function validar(Request $request)
    {
        return $request->validate([
            CategoriaTableInfo::NAME => 'required | unique:categorias',
            CategoriaTableInfo::IMAGE => 'required | image',
        ]);
    }
}
