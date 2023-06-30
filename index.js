function populate(){
    if(quiz.isEnded()){
        //showScore();
    }
    else{
        // show question
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;

        // show choices
    }
}
var questions=[
    new Question("who are you?",["boy","girl","other","bisexual"],"boy"),
    new Question("what is your age?",["10","20","30","18"],"18"),
    new Question("no. of members?",["2","4","6","8"],"4"),
    new Question("your class?",["8","10","12","6"],"8")
   
];
var quiz=new Quiz(questions);

populate();