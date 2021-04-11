<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\TableInfo\TagTableInfo;

class CreateTagsTable extends Migration
{
    private const TABLE_NAME = TagTableInfo::TABLE_NAME;

    public function up()
    {
        Schema::create(self::TABLE_NAME, function (Blueprint $table) {
            $table->id(TagTableInfo::ID);
            $table->string(TagTableInfo::NAME);
            $table->string(TagTableInfo::SLUG);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_NAME);
    }
}
