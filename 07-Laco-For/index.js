// const A = 3
// const B = 3

// console.log(A >= B)

// const a = 2
// const b = 2

console.log(a === b && a <= b)
//V e V = V

console.log(a === b && a < b)
//V e F = F

console.log(a > b && a === b)
//F e V = F

console.log(a > b && a < b)
//F e F = F

/*
or
*/

// const a = 2
// const b = 2

console.log(a === b || a <= b)
// V ou V = V

console.log(a === b || a < b)
//V ou F = V

console.log(a > b || a === b)
// F ou V = V

console.log( a > b || a < b)
// F ou F = F

/*
not
*/

const a = 2
const b = 2

console.log(!(a === b)) //false