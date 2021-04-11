<?php

namespace App\Models;

use App\TableInfo\PostTagTableInfo;
use eloquentFilter\QueryFilter\ModelFilters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostTag extends Model
{
    use HasFactory;
    use Filterable;

    protected $table = PostTagTableInfo::TABLE_NAME;

    protected $fillable = [
        PostTagTableInfo::POST,
        PostTagTableInfo::TAG,
    ];

    private static $whiteListFilter = [
        PostTagTableInfo::POST,
        PostTagTableInfo::TAG,
    ];
}
