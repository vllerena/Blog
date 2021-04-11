<?php

namespace Database\Seeders;

use App\Models\Categoria;
use App\TableInfo\CategoriaTableInfo;
use Illuminate\Database\Seeder;

class CategoriaSeeder extends Seeder
{
    public function run()
    {
        Categoria::create([
            CategoriaTableInfo::NAME => 'Categoria Test',
            CategoriaTableInfo::SLUG => 'categoria-test',
            CategoriaTableInfo::IMAGE => 'default.png',
        ]);
    }
}
