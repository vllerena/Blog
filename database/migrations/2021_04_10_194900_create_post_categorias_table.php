<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\TableInfo\PostCategoriaTableInfo;
use App\TableInfo\PostTableInfo;
use App\TableInfo\CategoriaTableInfo;

class CreatePostCategoriasTable extends Migration
{
    private const POST_CATEGORY_TABLE_NAME = PostCategoriaTableInfo::TABLE_NAME;
    private const POST_TABLE_NAME = PostTableInfo::TABLE_NAME;
    private const CATEGOY_TABLE_NAME = CategoriaTableInfo::TABLE_NAME;

    public function up()
    {
        Schema::create(self::POST_CATEGORY_TABLE_NAME, function (Blueprint $table) {
            $table->id(PostCategoriaTableInfo::ID);
            $table->foreignId(PostCategoriaTableInfo::POST)->constrained(self::POST_TABLE_NAME);
            $table->foreignId(PostCategoriaTableInfo::CATEGORIA)->constrained(self::CATEGOY_TABLE_NAME);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(self::POST_CATEGORY_TABLE_NAME);
    }
}
