var startBtn = document.getElementById("startquiz");
var quizBtn = document.getElementById("btnsubmit");
var excellentScore = document.getElementById("excellentMarks");
var averageScore = document.getElementById("averageMarks");
var poorScore = document.getElementById("PoorMarks");
var retryQuiz1 = document.getElementById("retry1");
var retryQuiz2 = document.getElementById("retry2");
var retryQuiz3 = document.getElementById("retry3");

startBtn.addEventListener("click", sendEvent);
quizBtn.addEventListener("click", calculationsEvent);

var answers = ["JS", "var", "add", "Hypertextmarkuplanguage"];

retryQuiz1.addEventListener("click", retryEvent);
retryQuiz2.addEventListener("click", retryEvent);
retryQuiz3.addEventListener("click", retryEvent);

let score = 0;

var checked_answers = [];

function sendEvent(e) {
  e.preventDefault();
  var firstPage = document.getElementById("pageOne");

  var questionsPage = document.getElementById("quizgroup");

  firstPage.style.display = "none";
  questionsPage.style.display = "initial";
}

// calculationsEvent()

function calculationsEvent(e) {
  e.preventDefault(e);

  let questionOne = document.getElementsByName("answerOne");
  let questionTwo = document.getElementsByName("answerTwo");
  let questionThree = document.getElementsByName("answerThree");
  let questionFour = document.getElementsByName("answerFour");
  let totalQuestion = [questionOne, questionTwo, questionThree, questionFour];


  for(var h=0; h<answers.length;h++){

    for (var i = 0; i < totalQuestion.length; i++) {
      for (var j = 0; j < totalQuestion[i].length; j++) {
        if (totalQuestion[i][j].checked) {
          console.log("answer2",totalQuestion[i][j].value);
          if (totalQuestion[i][j].value === answers[h]) {
            checked_answers.push(totalQuestion[i][j].value);
            score++;
          }
        }
      }
    }
  }
  var questionsPage = document.getElementById("quizgroup");
  questionsPage.style.display = "none";
  console.log(score);

  var totalMarksGained = grading(score);
  if (totalMarksGained >= 80) {
    var percentagPass = document.getElementById("goodscore");
    percentagPass.textContent = String(totalMarksGained);

    excellentScore.style.display = "initial";
  } else if (totalMarksGained >= 50) {
    var percentagAverage = document.getElementById("averagescore");
    percentagAverage.textContent = String(totalMarksGained);
    averageScore.style.display = "initial";
  } else {
    var percentagFail = document.getElementById("poorscore");
    percentagFail.textContent = String(totalMarksGained);
    poorScore.style.display = "initial";
  }
}

function grading(x) {
  var grade = (x / answers.length) * 100;
  return grade;
}

function retryEvent(e){
  e.preventDefault(e);
  var questionsPage = document.getElementById('quizgroup');
  questionsPage.style.display='initial';
  score= 0;
  excellentScore.style.display='none';
  averageScore.style.display='none'
  poorScore.style.display='none';
}

  
