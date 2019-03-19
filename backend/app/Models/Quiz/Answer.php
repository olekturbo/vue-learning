<?php

namespace App\Models\Quiz;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $fillable = ['name', 'is_correct', 'question_id'];
}
