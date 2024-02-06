const numOne = +prompt ("Enter First Number")
const operator = prompt ("Enter Operator")
const numTwo = +prompt ("Enter Second Number")

if (isNaN(numOne) || isNaN(numTwo)) {
    console.log("Wrong Number Input!")
}

if (operator === "+") {
    console.log(numOne + numTwo)
} else if (operator === "-") {
    console.log(numOne - numTwo)
} else if (operator === "*") {
    console.log(numOne * numTwo)
} else if (operator === "/") {
    console.log(numOne / numTwo)
} else {
    console.log("Wrong Operator Input!")
}