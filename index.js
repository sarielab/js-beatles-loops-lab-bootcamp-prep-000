// add solution here
var theBeatlesPlay = (musicians, instruments) => {
  const arrLen = musicians.length
  const arr = []
  
  for (let i = 0; i < arrLen; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

var johnLennonFacts = (facts) => {
  const factsLen = facts.length
  const newFact = []
  
  for (let i = 0; i < factsLen; i++) {
    newFact.push(`${facts[i]}!!!`)
  }
  
  return newFact
}

var iLoveTheBeatles = (count) => {
  const newArr = []
  
  for (let i = 0; i <= count; i++) {
    newArr.push('I love the Beatles! '.repeat(i).split('! '))
  }
  
  return newArr
}