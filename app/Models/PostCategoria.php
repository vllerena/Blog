<?php

namespace App\Models;

use App\TableInfo\PostCategoriaTableInfo;
use eloquentFilter\QueryFilter\ModelFilters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostCategoria extends Model
{
    use HasFactory;
    use Filterable;

    protected $table = PostCategoriaTableInfo::TABLE_NAME;

    protected $fillable = [
        PostCategoriaTableInfo::POST,
        PostCategoriaTableInfo::CATEGORIA,
    ];

    private static $whiteListFilter = [
        PostCategoriaTableInfo::POST,
        PostCategoriaTableInfo::CATEGORIA,
    ];
}
