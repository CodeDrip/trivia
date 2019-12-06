// console.log("Push Thruuuu")

//quiz variables

var container = document.querySelector("section")
var docQuestion = document.querySelector("h2").innerHTML
var docFirstCh = document.querySelector("#first-ch").innerHTML
var docSecondCh = document.querySelector("#second-ch").textContent
var docThirdCh = document.querySelector("#third-ch").textContent
var docFourthCh = document.querySelector("#fourth-ch").textContent
var docmoviePic = document.querySelector("aside").style.background
var docAnswer;
var nextButton = document.getElementById("nexBtn")




//quiz questions
var game {
    var quiz: [
        {q : "Whats That Show",
        options: ["The Tick", "Hey Arnold!", "Rocket Power", "Gargoyles"],
        answer: 2,
        img: "img/num1.gif"
        },
        {q : "Whats That Movie",
        options: [],
        answer: Number,
        img: "img/num1.gif"
        },
        {q : "Who is that",
        options: [],
        answer: Number,
        img: "img/num1.gif"
        }
    ]
}
// console.log(quiz[0])
console.log(quiz[0])//quiz object in array
console.log(quiz[0].q)//question
console.log(quiz[0].options)//options array 
console.log(quiz[0].options[0])//option 1
console.log(quiz[0].options[1])//option 2
console.log(quiz[0].options[2])//option 3
console.log(quiz[0].options[3])//option 4
console.log(quiz[0].answer)//answer "index num"


// console.log(quiz[0][0][0].quest)
// console.log(quiz[0][0][0].img)
// console.log(quiz[0][0][1].firstCh)//first ch string
// console.log(quiz[0][0][1].correct)//first ch boolean
// console.log(quiz[0][0][2].secondCh)//secondCh string
// console.log(quiz[0][0][2].correct)
// console.log(quiz[0][0][3].thirdCh)//3rd
// console.log(quiz[0][0][3].correct)
// console.log(quiz[0][0][4].fourthCh)//4th string
// console.log(quiz[0][0][4].correct)
// console.log(quiz[0][0][5].answer)


// //variables
// cQ = 0; //current Question
// var totalQuestions = quiz.length;
// var stats;
// // var plyrChoice;
// // var correctChoice;



// var container = document.querySelector("section")
// var docQuestion = document.querySelector("h2").innerHTML
// var docFirstCh = document.querySelector("#first-ch").innerHTML
// var docSecondCh = document.querySelector("#second-ch").textContent
// var docThirdCh = document.querySelector("#third-ch").textContent
// var docFourthCh = document.querySelector("#fourth-ch").textContent
// var docmoviePic = document.querySelector("aside").style.background
// var docAnswer;
// var nextButton = document.getElementById("nexBtn")


// function startGame() {
//     //set first set of questions
//     document.querySelector("h2").innerHTML = quiz[0][0][0].quest;
//     document.querySelector("#first-ch").innerHTML = quiz[0][0][1].firstCh;
//     document.querySelector("#second-ch").textContent = quiz[0][0][2].secondCh;
//     document.querySelector("#third-ch").textContent = quiz[0][0][3].thirdCh;
//     document.querySelector("#fourth-ch").textContent = quiz[0][0][4].fourthCh;
//     document.querySelector("aside").style.background = `url(${quiz[0][0][0].img})`
//     // return cQ = cQ + 1;
// }

// //record + score player answer
// // console.log()
// // console.log(grabOptions)



// const list = document.querySelector("ul")
// const items = list.querySelectorAll("li") 
// console.log(list)
// // console.log(items1)



// function choice(ele) {

//     console.log
//             if(ele.innerhtml == quiz[0][0][i].answer){
//             console.log(evt.target)
//             console.log(evt.target.li)
//             console.log(quiz[0][0][i].answer)

//             alert("cool")
// }       else {
//             alert("not terrible")
//             console.log(evt.target)
//             console.log(evt.target.innerhtml)
//             console.log(quiz[cQ].answer)

// }
// }


// for (let i = 0; i < list.length; i++) { 
//         //grabOptions[i].addEventListener("click", function(evt) {
//     let items = list[i].querySelectorAll("li");
//     console.log(items)
        
//     for (var j = 0; j < items.length; ++j) {
//         items[j]

//         items.addEventListener("click", function(evt) {

//         if(evt.target.innerhtml == quiz[0][0][i].answer){
//             console.log(evt.target)
//             console.log(evt.target.li)
//             console.log(quiz[0][0][i].answer)

//             alert("cool")
// }       else {
//             alert("not terrible")
//             console.log(evt.target)
//             console.log(evt.target.innerhtml)
//             console.log(quiz[cQ].answer)

// }
// })

// }
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


// //record + score player answer
// const grabOptions = document.querySelectorAll(".options")
// console.log()
// console.log(grabOptions)


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

// let quiz = [
//     {
//         question: "Whats That Movie?",
//         firstCh: "Players Club",
//         secondCh: "Set It Off",
//         thirdCh: "Friday After Next",
//         fourthCh: "Juice",
//         img: "img/qq1.jpg",
//         answer: "Set It Off"
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 1
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 2
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 3
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 2
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 4
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 1
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 3
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 1
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 4
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 3
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 1
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 2
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 4
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 3
//     },
//     {
//         question: "Quiz Question",
//         firstCh: "Answer",
//         secondCh: "answer",
//         thirdCh: "Another",
//         fourthCh: "Last",
//         img: "",
//         answer: 1
//     },
    

// ]
