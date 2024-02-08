const searchWord = () => {
    const sentence = prompt("Enter a sentence:")
    const word = prompt("Enter a word to search:")
    sentence.includes(word) ? console.log(`The word "${word}" is in the sentence.`) :console.error(`The word "${word}" is not in the sentence.`)
    }
  
  
searchWord();