<?php

namespace App\Models;

use App\TableInfo\UserTableInfo;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles;

    protected $fillable = [
        UserTableInfo::NAME,
        UserTableInfo::USERNAME,
        UserTableInfo::EMAIL,
        UserTableInfo::PASSWORD,
        UserTableInfo::IMAGE,
        UserTableInfo::ABOUT,
    ];

    protected $hidden = [
        UserTableInfo::PASSWORD,
        UserTableInfo::REMEMBER_TOKEN,
    ];

    protected $casts = [
        UserTableInfo::EMAIL_VERIFIED_AT => 'datetime',
    ];

    public function post()
    {
        return $this->hasMany(Post::class);
    }
}
