this.isEnded=function(){
    return this.questionIndex===this.questions.length-1;
}
function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
}

Quiz.prototype.getQuestionIndex=function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded=function(){
    return this.questionIndex===this.questions.length-1;
}

Quiz.prototype.guess=function(answer){
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}
