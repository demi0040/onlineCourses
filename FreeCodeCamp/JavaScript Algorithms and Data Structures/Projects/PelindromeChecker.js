const palindrome = str => 
  str.toLowerCase().replace((/[\W_]/g), '')
  === str.toLowerCase().replace((/[\W_]/g), '').split('').reverse().join('')

console.log(palindrome("never odd or even"))