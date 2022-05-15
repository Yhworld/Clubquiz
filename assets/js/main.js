var startBtn= document.getElementById('startquiz');
var quizBtn=document.getElementById('submit');
var excellentScore = document.getElementById('excellentMarks');
var averageScore = document.querySelector('#averageMarks');
var poorScore =document.querySelector('#poorMarks');
var retryQuiz = document.getElementById('retry');

startBtn.addEventListener('click', sendEvent);
quizBtn.addEventListener('click',calculationsEvent);
retryQuiz.addEventListener('click',retryEvent);


let totalCorrectScore = 0;

const correctAnswers= ['JS', 'var', 'add', 'Hyper text markup language' ]


function sendEvent(e) {
    e.preventDefault()
    var firstPage = document.getElementById('pageOne')

    var questionsPage = document.getElementById('quizPage')

    firstPage.style.display='none';
    questionsPage.style.display='initial';
}

function calculationsEvent(e) {
    e.preventDefault()

    let questionOne = document.getElementById('questionOne')
    let questionTwo = document.getElementById('questionTwo')
    let questionThree = document.getElementById('questionThree')
    let questionFour = document.getElementById('questionFour')
    let totalQuestion = [questionOne, questionTwo, questionThree, questionFour]


    for (let h = 0; h < array.length; h++) {
        for(var i=0; i<totalQuestion.length;i++){
        for( var j=0; j<totalQuestion[i].length;j++){
        if(quiz[i][j].checked){
        if(quiz[i][j].value === answers[h]){
        score++;
        }
        }
    }
}
    }

}
