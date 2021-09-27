var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var button = document.querySelector("#btn");
var showResult = document.querySelector("#show-result");


function checkLuckyNumber() {
    var addDate = birthDate.value
    var dateArray = addDate.split("-") //replaceAll = split

    var sumAll = 0

    for (let i = 0; i < dateArray.length; i++) {
        var yrMmDd = Number(dateArray[i]) //type casting
        sumAll = sumAll + yrMmDd
    }

    var luckyNum = Number(luckyNumber.value)

    if (sumAll % luckyNum === 0) {
        showResult.innerText = "Your Birthday is Lucky"
    } else {
        showResult.innerText = "Sorry your Birthday is not Lucky"
    }
}


button.addEventListener("click", checkLuckyNumber)