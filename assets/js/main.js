var startBtn= document.getElementById('startquiz');
var quizBtn=document.getElementById('submit');
var excellentScore = document.getElementById('excellentMarks');
var averageScore = document.querySelector('#averageMarks');
var poorScore =document.querySelector('#poorMarks');
var retryQuiz = document.getElementById('retry');

startBtn.addEventListener('click', sendEvent);
quizBtn.addEventListener('click',calculationsEvent);
retryQuiz.addEventListener('click',retryEvent);


