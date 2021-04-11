<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    public function run()
    {
        $administrador = Role::create([
            'name' => 'administrador'
        ]);

        $autor = Role::create([
            'name' => 'autor'
        ]);

        Permission::create([
            'name' => 'admin.dashboard.index'
        ])->assignRole($administrador);

    }
}
