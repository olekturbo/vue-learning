<?php

namespace App\Http\Controllers\API;

use App\Models\Quiz\Question;
use App\Http\Controllers\Controller;

class QuizController extends Controller
{
    public function getQuestions($id) {
        $question = Question::findOrFail($id);
        $question->push($question->answers);

        return $question->toJson(JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }
}
