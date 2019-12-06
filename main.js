var container = document.querySelector("section")
var docQuestion = document.querySelector("h2").innerHTML
var docFirstCh = document.querySelector("#first-ch").innerHTML
var docSecondCh = document.querySelector("#second-ch").textContent
var docThirdCh = document.querySelector("#third-ch").textContent
var docFourthCh = document.querySelector("#fourth-ch").textContent
var docmoviePic = document.querySelector("aside").style.background
var docAnswer;
var nextButton = document.getElementById("nexBtn")

var game = {
    quiz: [
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
    ],
    index: 0,
    

}