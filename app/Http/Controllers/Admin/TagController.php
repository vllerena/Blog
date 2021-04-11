<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use App\TableInfo\TagTableInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::all();
        return view('admin.tag.index', compact('tags'));
    }

    public function create()
    {
        return view('admin.tag.create');
    }

    public function store(Request $request)
    {
        $validate = $this->validar($request);
        $slug = Str::slug($request->name);
        Tag::create([
            TagTableInfo::NAME => $validate[TagTableInfo::NAME],
            TagTableInfo::SLUG => $slug,
        ]);
        return redirect()->route('admin.tag.index')->with('status', 'Tag registrado correctamente.');
    }

    public function edit(Tag $tag)
    {
        return view('admin.tag.edit', compact('tag'));
    }

    public function update(Tag $tag, Request $request)
    {
        $validate = $this->validar($request);
        $slug = Str::slug($request->name);
        $tag->update([
            TagTableInfo::NAME => $validate[TagTableInfo::NAME],
            TagTableInfo::SLUG => $slug,
        ]);
        return redirect()->route('admin.tag.index')->with('status', 'Tag actualizado correctamente.');
    }

    public function destroy(Tag $tag)
    {
        Tag::where(TagTableInfo::ID, $tag->id)->delete();
        return redirect()->route('admin.tag.index')->with('status', 'Tag eliminado correctamente.');

    }

    public function validar(Request $request)
    {
        return $request->validate([
            TagTableInfo::NAME => 'required | unique:tags',
        ]);
    }
}
