// function trueOrFalse(wasThatTrue) {
//   if (wasThatTrue) return 'Yes, that was true'
//   return 'No, that was false'

// }

// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2: case 3: case 4: case 5: case 6: ++count
//     break;
//     case 7: case 8: case 9: count
//     break;
//     case 10: case 'J': case 'Q': case 'K': case 'A': --count
//     break;
//   }

//   if(count>0) return `${count} Bet`
//   else return `${count} Hold`
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log(cc(4), cc(2))

// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) return obj[checkProp]
//   else return 'Not Found'
//   // Only change code above this line
// }

// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))
// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"))
// console.log(checkObj({city: "Seattle"}, "city"))

// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage.car.inside['glove box'];
// console.log(gloveBoxContents)

// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop !== 'tracks' && value!=="") records[id][prop] = value
//   else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) records[id][prop] = [value]
//   else if (prop === 'tracks' && value!=="") records[id][prop].push(value)
//   else if (value === "") delete records[id][prop]
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// // Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total=0
// for(let i=0; i<myArr.length; i++) total+=myArr[i]

// console.log(total)

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) product*=arr[i][j]
//   }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// function sum(arr, n) {
//   // Only change code below this line
//   if (n<=0) return 0
//   else return sum(arr, n-1) + arr[n-1]
//   // Only change code above this line
// }

// console.log(sum([1], 0))
// console.log(sum([2, 3, 4], 1))
// console.log(sum([2, 3, 4, 5], 3))

// function countdown(n) {
//   if (n<=0) return []
//   else {
//     const countArr = countdown(n-1)
//     countArr.unshift(n)
//     return countArr
//   } 
// }

// console.log(countdown(10))

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum>endNum) return []
//   else {
//     const cArr = rangeOfNumbers(startNum+1, endNum)
//     cArr.unshift(startNum)
//     return cArr
//   }
// }

// console.log(rangeOfNumbers(1,9))

// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   return  ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(n => n in userObj)  
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));

// function confirmEnding(str, target) {
//   return (str.substr(-target.length) === target) ? true : false
// }

// confirmEnding("Bastian", "n");

// const testArray = ["hello", "hey"]
// const mut1 = arr => {
//   let test = arr[1].toLowerCase()
//   let target = arr[0].toLowerCase()

//   for (let i = 0; i < test.length; i++)
//     if (target.indexOf(test[i]) < 0) return false
//   return true
// }

// console.log(mut1(testArray))

// const mut2 = arr => 
//   arr[1].toLowerCase().split('')
//     .every(l => arr[0].toLowerCase().indexOf(l) !== -1)


// console.log(mut2(testArray))

// const groupArray1 = (arr, size) => {
//   let nArr = []
//   for (let i = 0; i < arr.length; i+= size)
//     nArr.push(arr.slice(i, i+size))
//   return nArr
// }

// console.log(groupArray1(["a", "b", "c", "d"], 2))

// const groupArray2 = (arr, size) => {
//   let temp = []; let result = [];
//   for (let n = 0; n < arr.length; n++) {
//     if (n%size !== size-1) temp.push(arr[n])
//     else {
//       temp.push(arr[n])
//       result.push(temp)
//       temp = []
//     }
//   }

//   if (temp.length !== 0) result.push(temp)
//   return result
// }

// console.log(groupArray2(["a", "b", "c", "d"], 2))

// const groupArray3 = (arr, size) => {
//   let newArr = []
//   while (arr.length > 0) newArr.push(arr.splice(0, size))

//   return newArr
// }

// console.log(groupArray3(["a", "b", "c", "d"], 2))

// let dog = {
  //   name: "Spot",
  //   numLegs: 4,
  //   sayLegs: () => `This dog has ${dog.numLegs} legs.`
  // };
  
  // console.log(dog.sayLegs())
  
  // function Dog(name) {
  //   this.name = name;
  // }
  
  // Dog.prototype.numLegs = 4;
  
  // let beagle = new Dog("Snoopy");
  
  // let ownProps = [];
  // let prototypeProps = [];
  
  // // Only change code below this line
  // for (let prop in beagle)
  // beagle.hasOwnProperty(prop) ? ownProps.push(prop) : prototypeProps.push(prop)
  
  // console.log(ownProps);
  // console.log(prototypeProps);

// function Dog(name) {
//   this.name = name;
// }

// // Only change code below this line
// const joinDogFraternity = candidate => candidate.constructor === Dog ? true : false

// Dog.prototype = {
//   // Only change code below this line
//   numLegs: 4,
//   eat: () => console.log('hm hm hm'),
//   describe: () => console.log(`My name is ${this.name}`)
// };

// // the Immediately Invoked Function Expression (IIFE)
// (function () {
//   console.log("A cozy nest is ready");
// })();

// // tabs is an array of titles of each site open within the window
// const Window = function(tabs) {
//   this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function(otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function(tab) {
//   this.tabs.push('new tab'); // Let's open a new tab for now
//   return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function(index) {

//   // Only change code below this line

//   const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
//    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

//   // Only change code above this line

//   return this;
//  };

// // Let's create three browser windows
// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//   .tabOpen() // Open a new tab for cat memes
//   .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);

