<?php

namespace Database\Seeders;

use App\Models\Tag;
use App\TableInfo\TagTableInfo;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    public function run()
    {
        Tag::create([
            TagTableInfo::NAME => 'Tag Test',
            TagTableInfo::SLUG => 'tag-test',
        ]);
    }
}
