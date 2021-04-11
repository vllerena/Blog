<?php

namespace App\Models;

use App\TableInfo\CategoriaTableInfo;
use eloquentFilter\QueryFilter\ModelFilters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    use Filterable;

    protected $table = CategoriaTableInfo::TABLE_NAME;

    protected $fillable = [
        CategoriaTableInfo::NAME,
        CategoriaTableInfo::SLUG,
        CategoriaTableInfo::IMAGE,
    ];

    private static $whiteListFilter = [
        CategoriaTableInfo::NAME,
        CategoriaTableInfo::SLUG,
    ];

    public function posts()
    {
        return $this->belongsToMany(Post::class)->withTimestamps();
    }
}
