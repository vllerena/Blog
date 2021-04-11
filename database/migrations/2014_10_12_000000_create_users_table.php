<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\TableInfo\UserTableInfo;

class CreateUsersTable extends Migration
{
    private const TABLE_NAME = UserTableInfo::TABLE_NAME;
    public function up()
    {
        Schema::create(self::TABLE_NAME, function (Blueprint $table) {
            $table->id(UserTableInfo::ID);
            $table->string(UserTableInfo::NAME);
            $table->string(UserTableInfo::USERNAME)->unique();
            $table->string(UserTableInfo::EMAIL)->unique();
            $table->timestamp(UserTableInfo::EMAIL_VERIFIED_AT)->nullable();
            $table->string(UserTableInfo::PASSWORD);
            $table->string(UserTableInfo::IMAGE)->default('default.png');
            $table->text(UserTableInfo::ABOUT)->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_NAME);
    }
}
