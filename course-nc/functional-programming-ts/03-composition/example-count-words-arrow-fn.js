
// COMPOSITION

// Text
const text = 'Learn to programing web application'

// Fn to separate words
const splitSpace = (str) => str.split(' ')

const testSplit = splitSpace(text)
console.log(testSplit)


// Fn to count arrays
const count = (arr) => arr.length

const testCount = count(testSplit)
console.log(testCount)


// Composition from fn splitSpace and fn count
const countWords = (str) => count(splitSpace(str))

const result = countWords(text)
console.log(result)