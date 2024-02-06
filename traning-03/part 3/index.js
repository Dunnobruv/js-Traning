const sentence = prompt ("Enter Your Sentence")

function UpperCase(sentence) {
    if (!sentence) {
        throw Error("Text Is Required!")
    }
    return sentence.toString().toUpperCase()
}

console.log(UpperCase(sentence))