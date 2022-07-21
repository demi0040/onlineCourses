My Notes

All JS values have an inherent truthyness or falsyness about them 
- Falsy values:
-> false
-> 0
-> "" (empty string)
-> null
-> undefined
-> NaN
- Everything else is truthy!

indexOf('') -> -1 eger yoksa

pop() = remove from end and returns the element

push('element') =  add to end return the index as value

shift() = remove from start returns the element

unshift() = add to start retuns the index as value

reverse() = reverse the array and changes the original, destructive

splice(index, deletion amount, 'element to insert') = put an element to the index and deletes the given amount of element

const array = can still change the elements of a constant array, but cannot be reassigned

- call an object
    - > object['key']
    - > object.key
    - all keys are converted to strings except symbols

- for of : values - arrays, iterable
- for in: keys - objects

- Object
    - > Object.keys(myobject)
    - > Object.values(myobject)
    - > Object.entries(myobject)

- parseInt(value) if(!Number.isNaN(value))

- string.repeat(count);

- var defines variable out of scope
- let and const are defined in the scope

- function func(func2) {func()}
    - > func2() {return}
    - > func(func2) passing a function
    - > func(func2()) passing the result of the second func

- a function can return another function

- we can add functions as properties on objects, and we call them methods.
    - > method definition: constt meMethod = { DE: "deff", fun1(num) {return x}, func2(arr) {return y}}
    - > meMethod.DE, meMethod.fun1(2), meMethod.fun2([2, 3])

- set interval - repeat the action

- some and every : return boolean results if the conditions meet

- reduce : return one value from an array

- we can define default param to a function

- spread: Math.max(...num)
    - > ... spreads all elements

- rest: pass all arguments into an array
    - > func sum(...num) {return num.reduce()}

- window.getComputedStyle(h1).fontSize
    - > getComputedStyle gives me the last style i see in the web page

- we can add and remove class for any element we selected
    - > el.classList.add('className')
    - > el.classList.remove('className')
    - > .toggle
    The toggle() method toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible

- parent(upper lever) -> siblings (same level) -> child (lower level)

- addEventListener : we can assign new event and the old one still works; we can add once as third arg