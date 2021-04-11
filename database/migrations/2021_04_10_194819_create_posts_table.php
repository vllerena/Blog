<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\TableInfo\PostTableInfo;
use App\TableInfo\UserTableInfo;

class CreatePostsTable extends Migration
{
    private const POST_TABLE_NAME = PostTableInfo::TABLE_NAME;
    private const USER_TABLE_NAME = UserTableInfo::TABLE_NAME;

    public function up()
    {
        Schema::create(self::POST_TABLE_NAME, function (Blueprint $table) {
            $table->id(PostTableInfo::ID);
            $table->foreignId(PostTableInfo::USER)->constrained(self::USER_TABLE_NAME);
            $table->string(PostTableInfo::TITLE);
            $table->string(PostTableInfo::SLUG)->unique();
            $table->string(PostTableInfo::IMAGE)->default('default.png');
            $table->text(PostTableInfo::BODY);
            $table->integer(PostTableInfo::VIEW_COUNT);
            $table->boolean(PostTableInfo::STATUS)->default(false);
            $table->boolean(PostTableInfo::IS_APPROVED)->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(self::POST_TABLE_NAME);
    }
}
