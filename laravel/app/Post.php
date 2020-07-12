<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // prevent the mass assignment exception
    protected $fillable = ['title', 'body'];
}
