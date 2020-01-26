var container = document.querySelector("section")

var pointsHolder = document.querySelector(".score")

var tracker = document.querySelector(".sc-tracker")
var docQuestion = document.querySelector("h2")//.innerHTML
var docFirstCh = document.querySelector("#ch0")//.innerHTML
var docSecondCh = document.querySelector("#ch1")//.textContent
var docThirdCh = document.querySelector("#ch2")//.textContent
var docFourthCh = document.querySelector("#ch3")//.textContent
var docmoviePic = document.querySelector("aside")//.style.background
var docAnswer;
var domlist = document.querySelectorAll("li")
console.log(domlist[0])
var nextButton = document.getElementById("nexBtn")
// var points = 0

var game = {
    quiz: [
        {q : "Whats That Show",
        options: ["The<br> Tick", "Hey Arnold!", "Rocket Power", "Gargoyles"],
        answer: 2,
        img: "img/num1.gif"
        },
        {q : "Who Is This?",
        options: ["Eddie", "Chucky", "Tommy", "Phil"],
        answer: 1,
        img: "img/rugratss.gif"
        },
        {q : "What Made These Girls So Powerful?",
        options: ["Z Formula", "Potion X", "Ingredient X", "Z Juice"],
        answer: 2,
        img: "img/Powerpuff.gif"
        }
    ],
    index: 0,
    loadQ: function() {
        if (this.index <= this.quiz.length-1) {
        
        docQuestion.innerHTML = this.quiz[this.index].q
        docFirstCh.innerHTML = this.quiz[this.index].options[0]
        docSecondCh.innerHTML = this.quiz[this.index].options[1]
        docThirdCh.innerHTML = this.quiz[this.index].options[2]
        docFourthCh.innerHTML = this.quiz[this.index].options[3]
        docmoviePic.style.background = `url(${this.quiz[this.index].img})`
        } else {
            console.log("Quiz Overrr!")
        }
    },
    loadNext: function(){
        this.index++;
        this.loadQ();
    },
    check: function(ele) {
        var id = ele.id.split("");
        var compareId = id.pop()
        console.log(id)        
        console.log(compareId)        
        console.log(this.quiz[this.index].answer)
        if(compareId == this.quiz[this.index].answer) {
            console.log("Truuuu");
            this.points += 10;
            ele.className = "correct";
            this.addPoints();
            console.log(ele.className);
            console.log(this.points);
            // noMoreAction();

        } else {
            console.log("tryy againnn!")
            console.log(ele.className);
            ele.className = "false";
        }

    },
    points: 0,

    addPoints : function(){
        pointsHolder.innerHTML = `${this.points} points`

     },
    noMoreAction : function() {
        for(let i = 0; i < domlist.length; i++) {
            domlist[i].style.pointerEvents="none";
        }
    },
    moreAction : function() {
        for(let i = 0; i < domlist.length; i++) {
            domlist[i].style.pointerEvents = "auto";
            domlist[i].className = 'options'
        }
    }

}

window.onload = game.loadQ()

function selected(ele) {
    game.check(ele);
    game.noMoreAction();
}
function loadNext() {
    game.loadNext();
    game.moreAction();
}