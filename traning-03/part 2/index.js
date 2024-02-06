const numOne = +prompt("Enter First Number")
const numTwo = +prompt("Enter second Number")
const numThree = +prompt("Enter third Number")
const numFour = +prompt("Enter Fourth Number")
const numFive = +prompt("Enter Fifth Number")

function average(numOne, numTwo, numThree, numFour, numFive) {
    if (!isNaN(numFive + numFour + numThree + numTwo + numOne)) {
        const sum = numFive + numFour + numThree + numTwo + numOne
        const avg = sum / 5
        if (avg < 12) {
            return "Unacceptable!"
        } return avg
    } return "Enter Valid Numbers!"
}

console.log(average(numOne, numTwo, numThree, numFour, numFive))