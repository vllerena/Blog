<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use App\Models\Post;
use App\Models\PostCategoria;
use App\Models\PostTag;
use App\Models\Tag;
use App\TableInfo\PostCategoriaTableInfo;
use App\TableInfo\PostTableInfo;
use App\TableInfo\PostTagTableInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->get();
        return view('admin.post.index', compact('posts'));
    }

    public function create()
    {
        $categorias = Categoria::all();
        $tags = Tag::all();
        return view('admin.post.create', compact('categorias', 'tags'));

    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'image' => 'required',
            'status' => 'nullable',
            'categorias' => 'required',
            'tags' => 'required',
            'body' => 'required',
        ]);
        $image = $request->file('image');
        $slug = Str::slug($request->title);
        if (isset($image)) {
            $date = Carbon::now()->toDateString();
            $imagename = $slug . '-' . $date . '-' . uniqid() . '.' . $image->getClientOriginalExtension();
            if (!Storage::disk('public')->exists('post')) {
                Storage::disk('public')->makeDirectory('post');
            }
            $categoria = Image::make($image)->resize(1600, 1066)->save('foo.jpg');
            Storage::disk('public')->put('post/' . $imagename, $categoria);
        } else {
            $imagename = "default.png";
        }
        $post = Post::create([
           PostTableInfo::USER => auth()->user()->id,
           PostTableInfo::TITLE => $request->title,
           PostTableInfo::SLUG => $slug,
           PostTableInfo::IMAGE => $imagename,
           PostTableInfo::BODY => $request->body,
           PostTableInfo::VIEW_COUNT => 0,
           PostTableInfo::STATUS => isset($request->status) ? 1 : 0,
           PostTableInfo::IS_APPROVED => 1,
        ]);

        PostCategoria::create([
            PostCategoriaTableInfo::POST => $post->id,
            PostCategoriaTableInfo::CATEGORIA => $request->categorias
        ]);

        PostTag::create([
            PostTagTableInfo::POST => $post->id,
            PostTagTableInfo::TAG => $request->tags
        ]);

        return redirect()->route('admin.post.index')->with('status', 'Post registrado correctamente.');
    }
}
