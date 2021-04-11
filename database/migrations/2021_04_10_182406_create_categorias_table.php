<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\TableInfo\CategoriaTableInfo;

class CreateCategoriasTable extends Migration
{
    private const TABLE_NAME = CategoriaTableInfo::TABLE_NAME;

    public function up()
    {
        Schema::create(self::TABLE_NAME, function (Blueprint $table) {
            $table->id(CategoriaTableInfo::ID);
            $table->string(CategoriaTableInfo::NAME);
            $table->string(CategoriaTableInfo::SLUG);
            $table->string(CategoriaTableInfo::IMAGE)->default('default.png');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_NAME);
    }
}
