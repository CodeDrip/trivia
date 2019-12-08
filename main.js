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
var nextButton = document.getElementById("nexBtn")
// var points = 0

var game = {
    quiz: [
        {q : "Whats That Show",
        options: ["The Tick", "Hey Arnold!", "Rocket Power", "Gargoyles"],
        answer: 2,
        img: "img/num1.gif"
        },
        {q : "Who Is This?",
        options: ["Eddie", "Chucky", "Tommy", "Phil"],
        answer: 1,
        img: "img/rugrats.jpg"
        },
        {q : "What Made ",
        options: ["The Tick", "Hey Arnold!", "Rocket Power", "Gargoyles"],
        answer: Number,
        img: "img/puff.jpg"
        }
    ],
    index: 0,
    loadQ: function() {
        // pointsHolder.innerHTML = `${points}`
        // tracker.innerHTML = `${this.quiz.length} / ${this.quiz.length}`
        docQuestion.innerHTML = this.quiz[this.index].q
        docFirstCh.innerHTML = this.quiz[this.index].options[0]
        docSecondCh.innerHTML = this.quiz[this.index].options[1]
        docThirdCh.innerHTML = this.quiz[this.index].options[2]
        docFourthCh.innerHTML = this.quiz[this.index].options[3]
        docmoviePic.style.background = `url(${this.quiz[this.index].img})`
    },
    check: function(ele) {
        var id = ele.id.split("");
        var compareId = id.pop()
        console.log(this.quiz[this.index].answer)
        
        if(compareId == this.quiz[this.index].answer) {
            console.log("Truuuu");
            this.points += 10;
            ele.className = "correct";
            this.addPoints();
            console.log(ele.className);
            console.log(this.points);

        } else {
            console.log("tryy againnn!")
            console.log(ele.className);
            ele.className = "false";
        }

    },
    points: 0,

    addPoints : function(){
        pointsHolder.innerHTML = `${this.points} points`

    }
}

window.onload = game.loadQ()

function selected(ele) {
    game.check(ele);
}