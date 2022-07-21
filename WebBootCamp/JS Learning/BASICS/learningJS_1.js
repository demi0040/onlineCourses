// const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// // YOUR CODE GOES BELOW THIS LINE:
// planets.shift()
// planets.push("Saturn")
// planets.unshift("Mercury")

// console.log(planets)

// let cats = ['blue', 'kitty']
// let dogs = ['rusty', 'wyatt']

// let comboParty = dogs.concat(cats)
// comboParty.push('black', 'red', 'almond', 'sky')

// console.log(comboParty.includes('blue'))
// console.log(comboParty.indexOf('blue'))
// console.log(comboParty.reverse())
// console.log(comboParty.indexOf('blue'))

// console.log(comboParty.slice(1, 3))
// console.log(comboParty)

// comboParty.splice(3, 0, 'yellow')
// console.log(comboParty)

// // DO NOT TOUCH!!! (please)
// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];

// // YOUR CODE GOES BELOW THIS LINE:
// airplaneSeats[3][1] = "Hugo"
// console.log(airplaneSeats)

// const personObject = {
//     firstName: 'ihsan',
//     lastName: 'demir',
//     age: 21,
//     pets: ['dog', 'cat', 'bird']
// }

// console.log(personObject.pets)

// const product = {
//     name: 'Gummy Bears',
//     inStock: true,
//     price: 1.99,
//     flavors: ['grape', 'apple', 'cherry']
// }
// console.log(product)

// //PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// //YOUR CODE GOES DOWN HERE:
// let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`
// console.log(fullAddress)

// for (let i = 0; i <= 3; i++)
//     console.log(`loop: ${i}`)

// let myString = "Da ba dee da ba daa"
// for (let i = 0; i < 6; i++)
//     console.log(myString)

// for (let i = 25; i >= 0; i -= 5)
//     console.log(i)

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// people.forEach(element => {
//     console.log(element.toUpperCase())
// });

// const SECRET = 'BabyHippo'

// let guess = prompt("enter the secret code...")
// while (guess !== SECRET)
//     guess = prompt("enter the secret code...")
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (const nums of numbers) console.log(Math.pow(nums, 2))

// function printHeart() { console.log("<3") }
// printHeart()

// function rant(message) {
//     console.log(message.toUpperCase().repeat(3))
// }
// rant(`hi`)

// function isSnakeEyes(die1, die2) {
//     if (die1 === 1 && die2 === 1) console.log("Snake Eyes!")
//     else console.log("Not Snake Eyes!")
// }

// isSnakeEyes(1, 1)

// function multiply(num1, num2) {
//     return num1 * num2
// }

// function isShortsWeather(temp) {
//     if (temp >= 75) return true
//     else return false
// }

// function lastElement(arr) {
//     if (arr[arr.length - 1] === undefined) return null
//     else return arr[arr.length - 1]
// }

// console.log(lastElement([1, 2, 3]))

// function capitalize(str) {
//     return str && str[0].toUpperCase() + str.slice(1)
// }

// console.log(capitalize("cumle"))
// console.log(capitalize(""))
// console.log(capitalize())

// function sumArray(arr) {
//     return arr.reduce(function(x, y) {
//         return x + y
//     }, 0)
// }

// console.log(sumArray([1, 2, 3, 4, 5]))

// const daysOfWeek = { 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday" }

// function returnDay(num) {
//     if (isNaN(num) || num < 1 || num > 7) return null
//     else return daysOfWeek[num]
// }

// console.log(returnDay(1))
// console.log(returnDay("qw"))

// const square = s => Math.pow(s, 2)
// console.log(square(4))

// function makeBetweenFunc(min, max) {
//     return function(num) {
//         return num >= min && num <= max
//     }
// }

// const searchRange = makeBetweenFunc(10, 90)
// console.log(searchRange(60))
// console.log(searchRange(3))

// myArr = [1, 2, 3, 4, 5]

// const myCalc = {
//     PI: 3.14159,
//     square(num) { return num * num },
//     cube(num) { return num ** 3 }
// }

// console.log(myCalc.PI)
// console.log(myCalc.square(5))
// console.log(myCalc.cube(5))

// const square = {
//     area: num => Math.pow(num, 2),
//     perimeter: num => num * 4,
//     cube(num) { return Math.pow(num, 3) }
// }

// console.log(square.area(4))
// console.log(square.perimeter(4))
// console.log(square.cube(4))

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount += 1
//         return "EGG"
//     }
// }

// console.log(hen.name)
// console.log(hen.eggCount)
// console.log(hen.layAnEgg())
// console.log(hen.eggCount)

// // DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// const firstNames = fullNames.map(n => n.first.toUpperCase())
// console.log(firstNames)

// const greet = str => `Hey ${str}!`

// console.log(greet("Ali"))

// const myInterval = setInterval(() => console.log(Math.random()), 2000)
// clearInterval(myInterval)

// console.log("HEY")
// setTimeout(() => console.log("....are you still there!", ), 2000)
// console.log("Hi")

// const someNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']

// const validUserNames = arr => arr.filter(n => n.length < 10)

// const result = validUserNames(someNames)
// console.log(result)

// const allEvens = arr => arr.every(n => n%2===0)

// const rollDice = (n = 6) => Math.floor(Math.random() * n) + 1

// console.log(rollDice(20))
// console.log(rollDice(12))
// console.log(rollDice())

// console.log(...
//     "IHSAN")

// const cats = ['Blue', 'Scout', 'Rocket']
// const dogs = ['Rusty', 'Wyatt']

// const allPets = [...cats, ...dogs]
// console.log(allPets)

// console.log([...
//     "IHSAN"
// ])

// const [first, second] = cats
// const { email, firstName } = users
// const {born: birthYear} = users

// function fullname({ firstName, lastName = 'N/A' }) {
//     return `${firstName} ${lastName}`
// }

// movies.map(({title, score, year}) => {return `${title} (${year}) is rated ${score}`})

// const image = document.getElementById('unicorn')
// const heading = document.getElementById('mainheading')

// const links = document.querySelectorAll('p a')

// for (let link of links) console.log(link.href)

// const doneTodos = document.querySelectorAll('.done')
// const checkbox = document.querySelector('input[type = "checkbox"]')

// document.querySelector('span').innerText = 'Disgusting'

// const myImage = document.querySelector('img')
// myImage.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg')
// myImage.setAttribute('alt', 'chicken')

// const myH1 = document.querySelector('h1')
// const fontSize = window.getComputedStyle(myH1).fontSize
// console.log(fontSize)

// const chContainer = document.querySelector('div#container')
// const chImage = document.querySelector('img')

// chContainer.style.textAlign = 'center'
// chImage.style.width = '150px'
// chImage.style.borderRadius = '50%'

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// const allSpan = document.querySelectorAll('span')

// let num = 0

// for (const sp of allSpan) {
//     sp.style.color = colors[num]
//     num++
// }

// const allLi = document.querySelectorAll('li')

// for (const li of allLi) li.classList.toggle("highlight")

// const newLi = document.createElement('li')
// newLi.className = 'highlight'
// newLi.innerText = 'Hi, different'

// document.querySelector('ul').appendChild(newLi)

// const newH1 = document.createElement('h1')
// newH1.append("My Exercise of code")

// const myH2 = document.querySelector('h2')

// myH2.insertAdjacentElement('beforebegin', newH1)

// allLi.forEach(e => e.append(", Hi there"))

// for (let i = 0; i < 100; i++) {
//     const newButton = document.createElement('button')
//     newButton.innerText = `Hi, button ${i}`
//     const dCont = document.querySelector('div#container')
//     dCont.appendChild(newButton)
// }

// const myBtn = document.querySelector('#htBtn')

// const myH1 = document.querySelector('#htId')

// myBtn.onclick = () => console.log('someone clicked the button!!')

// const myAlert = () => alert('What have you done!!!!!!!!')
// const myAlert2 = () => alert('hover hover')

// myH1.onclick = myAlert
// myBtn.onmouseenter = myAlert2

// const myBtn2 = document.querySelector('#htBtn2')
// myBtn2.addEventListener('click', () => { alert('You clicked me, so what!!??') })

// const btnHello = document.querySelector('#hello')
// const btnGBye = document.querySelector('#goodbye')

// btnHello.addEventListener('click', () => console.log('hello'))

// btnGBye.addEventListener('click', () => console.log('goodbye'))

// const rgbBtn = document.querySelector('#rgbBtn')
// const rgbH1 = document.querySelector('#rgbH1')

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255)
//     const g = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)
//     return `rgb(${r}, ${g}, ${b})`
// }

// rgbBtn.addEventListener('click', () => {
//     const newColor = makeRandColor()
//     document.body.style.backgroundColor = newColor
//     rgbH1.innerText = newColor
// })

// for (let i = 0; i < 100; i++) {
//     const newButton = document.createElement('button')
//     newButton.innerText = `Hi, button ${i}`
//     newButton.className = 'nBtn'
//     const dCont = document.querySelector('div#container')
//     dCont.appendChild(newButton)
// }

// const btns = document.querySelectorAll('.nBtn')

// function colorize() {
//     this.style.backgroundColor = makeRandColor()
//     this.style.color = makeRandColor()
// }

// btns.forEach(n => n.addEventListener('click', colorize))
// document.querySelector('#testButton').addEventListener('click', (e) => {console.log(e)})

// const testInput = document.querySelector('#testInput')
// testInput.addEventListener(`keydown`, (e) => {
//   console.log(e.key)
//   console.log(e.code)
// })
// testInput.addEventListener('keyup', () => {console.log('KEYUP')})
