console.log("Push Thruuuu")

//quiz answers


//quiz questions
let quiz = [
    {
        question: "Whats That Movie?",
        firstCh: "Players Club",
        secondCh: "Set It Off",
        thirdCh: "Friday After Next",
        fourthCh: "Juice",
        img: "img/qq1.jpg",
        answer: "Set It Off"
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 1
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 2
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 3
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 2
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 4
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 1
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 3
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 1
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 4
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 3
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 1
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 2
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 4
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 3
    },
    {
        question: "Quiz Question",
        firstCh: "Answer",
        secondCh: "answer",
        thirdCh: "Another",
        fourthCh: "Last",
        img: "",
        answer: 1
    },
    

]

//just a thought
var startGame = function() {
    const a;
}

//variables
// var currentQuestion = 0;
var totalQuestions = quiz.length;
var points = 0;
var stats;

var plyrChoice;
var correctChoice;

var container = document.getElementsByTagName("section")
var docShowQuestion = document.getElementsByTagName("h2").innerhtml
var docFirstCh = document.getElementsByClassName("first-ch").innerhtml
var docSecondCh = document.getElementsByClassName("second-ch").innerhtml
var docThirdCh = document.getElementsByClassName("third-ch").innerhtml
var docFourthCh = document.getElementsByClassName("fourth-ch").innerhtml
var docAnswer;
var nextButton = document.getElementById("nexBtn")

// var game {}

//first question load
question1 = quiz[0].question;
// console.log(firstQu)
firstCh1 = quiz[0].firstCh
secondCh1 = quiz[0].firstCh
thirdCh1 = quiz[0].firstCh
fourthCh1 = quiz[0].firstCh

//record + score player answer



//load next Questions
function getQuiz(i) {
    var q = quiz[i];
    docShowQuestion = quiz[i].question
    docFirstCh = quiz[i].firstCh
    docSecondCh = quiz[i].secondCh
    docThirdCh = quiz[i].thirdCh
    docFourthCh = quiz[i].fourthCh

    return i++
}


