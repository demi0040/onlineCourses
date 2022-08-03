// question 1
const sumAll = arr => {
  let sum = 0
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++)
    sum += i
  return sum
}

console.log(sumAll([10, 15]))

// question 2
const diffArray = (arr1, arr2) => arr1
  .concat(arr2)
  .filter(i => !arr1.includes(i) || !arr2.includes(i))

  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

// question 3
// first solution
const destroyer1 = arr => {
  const valsRv = Array.from(arguments).slice(1)
  return arr.filter(v => !valsRv.includes(v))
}

// second solution
const destroyer = (arr, ...valsRv) => arr.filter(e => !valsRv.includes(e))

// question 4
// solution 1
const whatIsInAName = (col, source) => {
  const arr = Object.keys(source) 

  return col
    .filter(o => arr
        .every(k => o.hasOwnProperty(k) && o[k] === source[k]))
}

// solution 2
const whatIsInAName2 = (col, sou) => {
  const sKey = Object.keys(sou)

  return col.filter(o => sKey
      .map(k => o.hasOwnProperty(k) && o[k] === sou[k])
      .reduce((a, b) => a && b))
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
)

// question 5
const spinalCase = t => t
  .trim()
  .split(/\s|_|(?=[A-Z])/)
  .join('-')
  .toLowerCase()

spinalCase('This Is Spinal Tap');

// question 6
// solution 1
const translatePigLatin = str => str
  .replace(/^[aeiou]\w*/, '$&way')
  .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay')

// solution 2
const transPigLatin2 = (str, cPs = 0) => 
  ['a', 'e', 'i', 'o', 'u'].includes(str[0]) ? str + (cPs === 0 ? 'way' : 'ay')
  : cPs === str.length ? str + 'ay'
  : translatePigLatin(str.slice(1) + str[0], cPs + 1)

  console.log(translatePigLatin("consonant"))

  console.log(transPigLatin2("consonant"))

// question 7
// solution 1
const myReplace = (str, before, after) => {
  (/^[A-Z]/.test(before)) 
    ? after = after[0].toUpperCase() + after.substring(1)
    : after = after[0].toLowerCase() + after.substring(1)
    
    return str.replace(before, after)
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
  
  // solution 2
  const myReplace2 = (str, before, after) => {
    const strArr = str.split(' ')
    const [wToRep] = strArr.filter(i => i === before)
    const replace = wToRep[0] === wToRep[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1)
    return strArr.map(i => (i === before ? replace : i)).join(' ')
  }
  
  console.log(myReplace2("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))

// question 8
const pairElement = str => {
  const matchPair = (c) => c === 'A' ? ['A', 'T']
    : c === 'T' ? ['T', 'A']
    : c === 'C' ? ['C', 'G']
    : c === 'G' ? ['G', 'C'] : null
  const pDone = str.split('')
  return pDone.map(i => matchPair(i))
}

console.log(pairElement("GCG"))

// question 9
const fearNotLetter = str => {
  for (let i = 0; i < str.length; i++) 
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i)
      return String.fromCharCode(str.charCodeAt(i) - 1)

  return undefined;
}

console.log(fearNotLetter("abce"))

// question 10
// solution 1
const uniteUnique = (...arr) => [...new Set(arr.flat())];

// solution 2
const uniteUnique2 = () => {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

// question 11
const htmlEnt = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
}

const convertHTML = str => str.split('')
  .map(e => htmlEnt[e] || e)
  .join('')

// question 12
const sumFibs = num => {
  const fibNums = [1, 1]
  let nextNums = 0

  while ((nextNums = fibNums[0] + fibNums[1]) <= num) fibNums.unshift(nextNums)

  return fibNums.filter(n => n%2 != 0).reduce((a, b) => a+b)
}

console.log(sumFibs(9))

// question 13
const sumPrimes = num => {
  const primeNums = []

  for (let i = 2; i <= num; i++)
    (primeNums.every(p => i%p !== 0)) ? primeNums.push(i) : null

  return primeNums.reduce((p, c) => p+c, 0)
}

console.log(sumPrimes(977))

// question 14
const smallestCommons = num => {
  const [min, max] = num.sort((a,b) => a-b)
  const dist = Array(max-min+1).fill(0).map((_,i) => i+min)

  const gcd = (a, b) => (b===0) ? a : gcd(b, a%b)
  const lcm = (a, b) => a*b / gcd(a, b)

  return dist.reduce((p, c) => lcm(p, c))
}

console.log(smallestCommons([1, 5]))

// question 15
const dropElements = (arr, func) =>
  arr.slice(arr.findIndex(func) >= 0 
    ? arr.findIndex(func)
    : arr.length)

console.log(dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
}))

// question 16
const steamrollArray = arr =>
  [].concat(...arr).some(Array.isArray)
    ? steamrollArray([].concat(...arr))
    : [].concat(...arr)

console.log(steamrollArray([1, [2], [3, [[4]]]]))

// question 17
const binaryAgent = str =>
  String.fromCharCode(
    ...str.split(' ')
    .map(c => parseInt(c, 2))
  )

console.log(binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
))

// question 18
const truthCheck = (coll, pre) =>
  coll.every(o => o[pre])

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))

// question 19
const addTogether = (...args) => {
  const [first, second] = args

  return (typeof(first) !== "number")
    ? undefined
    : (args.length === 1)
    ? (second) => addTogether(first, second)
    : (typeof(second) !== "number")
    ? undefined
    : first + second;
}

console.log(addTogether(8,9))

// question 20
const Person = function(firstAndLast) {
  let fullName = firstAndLast

  this.getFirstName = () => 
    fullName.split(' ')[0]
  this.getLastName = () =>
    fullName.split(' ')[1]
  this.getFullName = () => fullName

  this.setFirstName = name =>
    fullName = name + ' ' + fullName.split(' ')[1]
  this.setLastName = name =>
    fullName = fullName.split(' ')[0] + ' ' + name
  this.setFullName = name => fullName = name
}

const bob = new Person("Bob Ross");
console.log(bob.getFullName());

// question 21
const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  return arr.map(({name, avgAlt}) => {
    const earth = earthRadius + avgAlt
    const orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM))

    return {name, orbitalPeriod}
  })
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))