const numOne = +prompt("Enter First Number")
const numTwo = +prompt("Enter Second Number")
const operator = prompt("Enter Operator")

function sum(numOne, numTwo, operator) {
    if(!isNaN(numOne+numTwo)){
        switch (operator) {
            case '+' : return (numOne+numTwo)
            case '-' : return (numOne-numTwo)
            case '*' : return (numOne*numTwo)
            case '/' : return (numOne/numTwo)
            default : return ("Wrong Operator Input!")
        }
    } return "Wrong Number Input!"
}

console.log(sum(numOne, numTwo, operator))