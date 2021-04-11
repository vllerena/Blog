<?php

namespace App\Models;

use App\TableInfo\TagTableInfo;
use eloquentFilter\QueryFilter\ModelFilters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;
    use Filterable;

    protected $table = TagTableInfo::TABLE_NAME;

    protected $fillable = [
        TagTableInfo::NAME,
        TagTableInfo::SLUG,
    ];

    private static $whiteListFilter = [
        TagTableInfo::NAME,
        TagTableInfo::SLUG,
    ];

    public function posts()
    {
        return $this->belongsToMany(Post::class)->withTimestamps();
    }
}
