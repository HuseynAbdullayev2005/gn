
function getRandom() {
    return Math.floor(Math.random() * 20)
}
let newScore = document.querySelector(".newScore");
let scr = document.querySelector(".score");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let guess = document.querySelector(".guess");
let s = 0
guess.classList.add("font")
let compNumber = getRandom();
btn.addEventListener("click", function () {

    let yourGuess = document.getElementById("inp").value;
    console.log(compNumber);
    if (parseInt(yourGuess) === compNumber) {
        console.log("win");

        youWin();
        s++;
        newScore.innerHTML = s
    

    }
    else if (parseInt(yourGuess) <= compNumber) {
        guess.innerHTML = "yuxari"
    }
    else if (parseInt(yourGuess) >= compNumber) {
        guess.innerHTML = "asagi"
    }
    else {
        console.log("duzgun eded daxil et");
    }

})


function youWin() {
    let main = document.querySelector(".main");
    main.innerHTML = "you win";
    let greenBody = document.querySelector("body")
    greenBody.style.backgroundColor = "green";
}

