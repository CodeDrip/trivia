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
// var startGame = function() {
//     const a;
// }

//variables

var totalQuestions = quiz.length;

var stats;

// var plyrChoice;
// var correctChoice;

// var container = document.querySelector("section")
// var docShowQuestion = document.querySelector("h2").innerHTML
// var docFirstCh = document.querySelector("#first-ch").innerHTML
// var docSecondCh = document.querySelector("#second-ch").textContent
// var docThirdCh = document.querySelector("#third-ch").textContent
// var docFourthCh = document.querySelector("#fourth-ch").textContent
// var docmoviePic = document.querySelector("aside").style.background
// var docAnswer;
// var nextButton = document.getElementById("nexBtn")

cQ = 0; //current Question

function startGame() {
    //set first set of questions
    document.querySelector("h2").innerHTML = quiz[cQ].question;
    document.querySelector("#first-ch").innerHTML = quiz[cQ].firstCh;
    document.querySelector("#second-ch").textContent = quiz[cQ].secondCh;
    document.querySelector("#third-ch").textContent = quiz[cQ].thirdCh;
    document.querySelector("#fourth-ch").textContent = quiz[cQ].fourthCh;
    document.querySelector("aside").style.background = `url(${quiz[cQ].img})`
    return cQ = cQ + 1;
}

// for (let i = 0; i < grabOptions.length; i++) { 
//     grabOptions[i].addEventListener("click", function(evt) {
//         //how to handle the comparison for the selected answer to the correct answer
//         if(evt.target.innerhtml == quiz[0].answer){
//             alert("cool")
// } else {
//     alert("notterrible")
// }
// })
    
// }



// var cQ = 0;
// //load Questions
// function getQuiz(cQ) {
//     q = questions[cQ];
//     console.log(quiz[0]);
//     document.querySelector("h2").innerHTML = (cQ + 1) + '. ' + q.question;
//     document.querySelector("#first-ch").innerHTML = quiz[cQ].firstCh;
//     document.querySelector("#second-ch").textContent = quiz[cQ].secondCh;
//     document.querySelector("#third-ch").textContent = quiz[cQ].thirdCh;
//     document.querySelector("#fourth-ch").textContent = quiz[cQ].fourthCh;
// }

// function loadNext () {
//     console.log(hey)
// }
// //load first question
// function firstQ() {
// docShowQuestion = quiz[0].question;
// console.log(docShowQuestion)
// docFirstCh = quiz[0].firstCh
// docSecondCh = quiz[0].firstCh
// docThirdCh = quiz[0].firstCh
// docFourthCh = quiz[0].firstCh
// }


//record + score player answer
const grabOptions = document.querySelectorAll(".options")
console.log()
console.log(grabOptions)


// change innerhtml of options to reflect questions 


// for (let i = 0; i < grabOptions.length; i++) { 
//     grabOptions[i].addEventListener("click", function(evt) {
//         //how to handle the comparison for the selected answer to the correct answer
//         if(evt.target.innerhtml == quiz[0].answer){
//             alert("cool")
// } else {
//     alert("notterrible")
// }
// })
    
// }

// let roundCount = 1

// //load next Questions
// function getQuiz() {
//     var q = quiz[];
//     docShowQuestion = quiz[roundCount].question
//     docFirstCh = quiz[i].firstCh
//     docSecondCh = quiz[i].secondCh
//     docThirdCh = quiz[i].thirdCh
//     docFourthCh = quiz[i].fourthCh

//     return roundCount++
// }

// getQuiz(1)
// getQuiz(1)