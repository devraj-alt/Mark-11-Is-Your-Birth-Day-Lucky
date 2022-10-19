var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var button = document.querySelector("#btn");
var showResult = document.querySelector("#show-result");


function checkLuckyNumber() {
    var addDate = birthDate.value
    var dateArray = addDate.split("-")
    if(!addDate){
        showResult.innerText = "Invalid date"
        return
    }
    var sumAll = 0
    var luckyNum = Number(luckyNumber.value)

    if(luckyNum > 0){
        
        for (let i = 0; i < dateArray.length; i++) {
            var yrMmDd = Number(dateArray[i])
            sumAll = sumAll + yrMmDd
        }
        
        if (sumAll % luckyNum === 0) {
            showResult.innerText = "Your Birthday is Lucky"
        } else {
            showResult.innerText = "Sorry your Birthday is not Lucky"
        }
        
    }else{
        showResult.innerText = "Invalid lucky number"
    }
}


button.addEventListener("click", checkLuckyNumber)