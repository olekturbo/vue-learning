<?php

namespace App\Models\Quiz;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['name'];

    /**
     * Get the answers for the question.
     */
    public function answers()
    {
        return $this->hasMany('App\Models\Quiz\Answer');
    }
}
