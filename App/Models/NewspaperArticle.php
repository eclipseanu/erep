<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewspaperArticle extends Model
{
    const CATEGORY_WAR = 1;
    const CATEGORY_ECONOMICS = 2;
    const CATEGORY_SOCIAL = 3;

    public static $validCategories = [
        self::CATEGORY_WAR,
        self::CATEGORY_ECONOMICS,
        self::CATEGORY_SOCIAL
    ];

    protected $fillable = ["title", "text", "category", "uid", "country", "views", "votes"];
}