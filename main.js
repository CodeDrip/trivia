//make next button invisible when its not needed
//fix options padding + points
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
var nextButton = document.getElementById("nexBtn")
var gameOpener = document.querySelector(`.opener-wrapper`)
var gameCloser = document.querySelector(`.closer-wrapper`)
var closerBut = document.querySelector(`.closer`) 
var openBut = document.querySelector('.opener')
openBut.addEventListener('click', function(event) {
    event.preventDefault();
    gameOpener.style.display = 'none'
    index = 0

})
var finalPointsPara = document.querySelector("#final-stats-3")

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
    // gameOpener: function() {}
    loadQ: function() {
        if (this.index <= this.quiz.length-1) {
        
        docQuestion.innerHTML = this.quiz[this.index].q
        docFirstCh.innerHTML = this.quiz[this.index].options[0]
        docSecondCh.innerHTML = this.quiz[this.index].options[1]
        docThirdCh.innerHTML = this.quiz[this.index].options[2]
        docFourthCh.innerHTML = this.quiz[this.index].options[3]
        docmoviePic.style.background = `url(${this.quiz[this.index].img})`

        domlist[0].id = ``
        domlist[1].id = ``
        domlist[2].id = ``
        domlist[3].id = ``

        
        nextButton.style.display = 'none'
        
        // openEle.style.display =

        }
         else {
            this.gameOver();
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
        console.log(ele.parentElement)             
        // console.log(compareId)        
        console.log(this.quiz[this.index].answer)
        //If userClick == correct option index
        if(compareId == this.quiz[this.index].answer) {
            domlist[0].id = `incorrect`
            domlist[1].id = `incorrect`
            domlist[2].id = `incorrect`
            domlist[3].id = `incorrect`

            i = this.quiz[this.index].answer
            //for i in domLost[i]
            //if i = compareId
            //domlist id [i] = correct
            //else domlist
            domlist[i].id = `correct`
                


            this.points += 10;
            this.addPoints();
            ele.className = "incorrect";
            // console.log(points)
            // ele.id = correct; 
            console.log(ele.className);
            console.log(this.points);
            console.log(domlist)
            


            // console.log(domlist[i].id)
            // domlist[2].style.color = `red`
            // domlist[i].id = `correct`
            // console.log(domlist[i].id)
            console.log(domlist[0].className)

           
            nextButton.style.display = 'block'
            








            // noMoreAction();

        } else {
            console.log("tryy againnn!")
            console.log(ele.className);
            ele.className = "false";
            domlist[0].id = `incorrect`
            domlist[1].id = `incorrect`
            domlist[2].id = `incorrect`
            domlist[3].id = `incorrect`
            i = this.quiz[this.index].answer
            domlist[i].id = `correct`

            nextButton.style.display = 'block'



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
    },
    gameOver: function(){
        console.log("done")
        gameCloser.style.display = `block`
        finalPointsPara.innerHTML = `Final Points: ${this.points} / 30`
        closerBut.addEventListener('click', function(event) {
            window.location.reload();

            // event.preventDefault();
            // gameOpener.style.display = 'none'
            // gameCloser.style.display = 'none'
            // this.game()

            // this.index = 0
            // this.points = 0

            // this.loadQ()
        
        })
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