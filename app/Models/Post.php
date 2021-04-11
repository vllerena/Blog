<?php

namespace App\Models;

use App\TableInfo\PostTableInfo;
use eloquentFilter\QueryFilter\ModelFilters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    use Filterable;

    protected $table = PostTableInfo::TABLE_NAME;

    protected $fillable = [
        PostTableInfo::USER,
        PostTableInfo::TITLE,
        PostTableInfo::SLUG,
        PostTableInfo::IMAGE,
        PostTableInfo::BODY,
        PostTableInfo::VIEW_COUNT,
        PostTableInfo::STATUS,
        PostTableInfo::IS_APPROVED,
    ];

    private static $whiteListFilter = [
        PostTableInfo::TITLE,
        PostTableInfo::SLUG,
    ];

    public function user()
    {
        return $this->belongsTo(User::class, PostTableInfo::USER);
    }

    public function categorias()
    {
        return $this->belongsToMany(Categoria::class)->withTimestamps();
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class)->withTimestamps();
    }
}
