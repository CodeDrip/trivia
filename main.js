var container = document.querySelector("section")
var docQuestion = document.querySelector("h2")//.innerHTML
var docFirstCh = document.querySelector("#first-ch")//.innerHTML
var docSecondCh = document.querySelector("#second-ch")//.textContent
var docThirdCh = document.querySelector("#third-ch")//.textContent
var docFourthCh = document.querySelector("#fourth-ch")//.textContent
var docmoviePic = document.querySelector("aside")//.style.background
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
        options: ["The Tick", "Hey Arnold!", "Rocket Power", "Gargoyles"],
        answer: Number,
        img: "img/num1.gif"
        },
        {q : "Who is that",
        options: ["The Tick", "Hey Arnold!", "Rocket Power", "Gargoyles"],
        answer: Number,
        img: "img/num1.gif"
        }
    ],
    index: 0,
    loadQ: function() {
        docQuestion.innerHTML = this.quiz[this.index].q
        docFirstCh.innerHTML = this.quiz[this.index].options[0]
        docSecondCh.innerHTML = this.quiz[this.index].options[1]
        docThirdCh.innerHTML = this.quiz[this.index].options[2]
        docFourthCh.innerHTML = this.quiz[this.index].options[3]
        docmoviePic.style.background = `url(${this.quiz[this.index].img})`

    },
    selected: function(ele) {
        alert(ele)
    }
}

window.onload = game.loadQ()