<?php

namespace Database\Seeders;

use App\Models\User;
use App\TableInfo\UserTableInfo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            UserTableInfo::NAME => 'Administrador',
            UserTableInfo::USERNAME => 'admin',
            UserTableInfo::EMAIL => 'admin@gmail.com',
            UserTableInfo::EMAIL_VERIFIED_AT => now(),
            UserTableInfo::PASSWORD => Hash::make('admin123'),
            UserTableInfo::REMEMBER_TOKEN => Str::random(10),
        ])->assignRole('administrador');

        User::create([
            UserTableInfo::NAME => 'Autor',
            UserTableInfo::USERNAME => 'autor',
            UserTableInfo::EMAIL => 'autor@gmail.com',
            UserTableInfo::EMAIL_VERIFIED_AT => now(),
            UserTableInfo::PASSWORD => Hash::make('autor123'),
            UserTableInfo::REMEMBER_TOKEN => Str::random(10),
        ])->assignRole('autor');
    }
}
