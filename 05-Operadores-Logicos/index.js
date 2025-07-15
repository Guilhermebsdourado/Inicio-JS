/*  
    == ---- igual ---- A==B ---- verdadeiro se A for igual a B
    OBS: esse aqui ele não ve a tipagem dele

    === ---- idêntico --- A===B ---- verdadeiro se A for idêndico a B
    OBS: esse aqui ele ve a tipagem dele, caso ele ta nas aspas ou não.
    
    != ---- diferente ---- A != B ---- verdadeiro se o A for diferente do A

    !== ----não idêntico ----A !== B ---- verdadeiro se o A não for idêntico a B
     OBS: esse aqui ele ve a tipagem dele, caso ele ta nas aspas ou não.

    < ---- menor que ---- A < B ---- verdadeiro quando for menor que B

    <= ---- menor igual que ---- A <= B ---- verdadeiro quando A for menor ou igual a B 

    > ---- maior que ---- A > B verdadeiro quando o A for maior que B

    >= ---- maior igual que --- A >= B verdadeiro quando for maior ou igual a B
*/ 
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
