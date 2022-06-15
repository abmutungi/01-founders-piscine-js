const longWords = (arr) => arr.every((str) => str.length >= 5);
const oneLongWord = (arr) => arr.some((str) => str.length >= 10)
const noLongWords = (arr) => arr.every((str) => str.length < 7)

console.log(longWords(['double', 'afford', 'coalition', 'reaction', 'persist']));
console.log(oneLongWord(['leak', 'talk', 'bite', 'slip', 'free']));
console.log(noLongWords(['leak', 'talk', 'bite', 'slip', 'free']));

