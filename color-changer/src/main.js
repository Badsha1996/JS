const hexArray = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]

const wordNumber = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine'
]

// QuerySelector is used for importing elements from HTML to JS
const btn = document.querySelector(".btn")
const hexText = document.querySelector(".hex-text")
const text = document.querySelector(".main-text");

// addEventListener is user for manuplating clicking of a button
// we can manipulate click of a button using javascipt 
btn.addEventListener("click", function () {
    let hexCode = "#"
    let words = "Hash "

    // loop is used for adding 6 charecter 
    // inside the hexcode string
    for (let index = 0; index < 6; index++) { 
        // hexCode is a string where we are 
        // adding random elements from 
        // hexArray by generating random index numbers 
        hexCode += hexArray[getRandomNumber()]
    }

    for (let index = 1; index < 7; index++) { 
        // check whether it's a num or not
        if(Number.isInteger(parseInt(hexCode[index]))){ 
            words+=wordNumber[parseInt(hexCode[index])] + " "
        }else{
            words+=hexCode[index] + " "
        }
    
    }

    // We are chnaging the text on html span tag 
    // we are chnaging the body color using style.background
    hexText.textContent = hexCode
    document.body.style.backgroundColor = hexCode
    text.textContent = words
})

// Get a random number inorder to get index of array
function getRandomNumber(){
    return Math.floor(Math.random() * hexArray.length)
}