const arr = []

const generateObject = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const chara = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const randomWord = chara[Math.floor(Math.random() * 6)] + chara[Math.floor(Math.random() * 6)] + chara[Math.floor(Math.random() * 6)] + chara[Math.floor(Math.random() * 6)] + chara[Math.floor(Math.random() * 6)] + chara[Math.floor(Math.random() * 6)];
    const date = String(170738954) + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    return {
        randomNumber,
        randomWord,
        date: new Date(+date)
    }
}

const generateItem = () => {
    arr.push(generateObject())
}