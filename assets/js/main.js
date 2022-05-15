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


