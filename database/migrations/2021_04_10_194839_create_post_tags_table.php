<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\TableInfo\PostTagTableInfo;
use App\TableInfo\PostTableInfo;
use App\TableInfo\TagTableInfo;

class CreatePostTagsTable extends Migration
{
    private const POST_TAG_TABLE_NAME = PostTagTableInfo::TABLE_NAME;
    private const POST_TABLE_NAME = PostTableInfo::TABLE_NAME;
    private const TAG_TABLE_NAME = TagTableInfo::TABLE_NAME;

    public function up()
    {
        Schema::create(self::POST_TAG_TABLE_NAME, function (Blueprint $table) {
            $table->id(PostTagTableInfo::ID);
            $table->foreignId(PostTagTableInfo::POST)->constrained(self::POST_TABLE_NAME);
            $table->foreignId(PostTagTableInfo::TAG)->constrained(self::TAG_TABLE_NAME);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(self::POST_TAG_TABLE_NAME);
    }
}
