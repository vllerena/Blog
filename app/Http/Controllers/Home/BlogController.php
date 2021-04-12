<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $post = Post::where('id', 3)->first();
        return view('home.blog.index', compact('post'));
    }
}
