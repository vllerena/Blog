<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\PostCategoria;
use App\Models\PostTag;
use App\TableInfo\PostCategoriaTableInfo;
use App\TableInfo\PostTableInfo;
use App\TableInfo\PostTagTableInfo;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    public function run()
    {
        $post = Post::create([
            PostTableInfo::USER => 1,
            PostTableInfo::TITLE => 'Titulo',
            PostTableInfo::SLUG => 'titulo',
            PostTableInfo::IMAGE => 'default.png',
            PostTableInfo::BODY => 'Contenido Lorem Ipsum',
            PostTableInfo::VIEW_COUNT => 0,
            PostTableInfo::STATUS => 1,
            PostTableInfo::IS_APPROVED => 1,
        ]);

        PostTag::create([
           PostTagTableInfo::POST => $post->id,
           PostTagTableInfo::TAG => 1 ,
        ]);

        PostCategoria::create([
           PostCategoriaTableInfo::POST => $post->id,
           PostCategoriaTableInfo::CATEGORIA => 1,
        ]);
    }
}
