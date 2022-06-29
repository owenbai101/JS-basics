// assign orperator
let x = 10;
let y =3;
x++;
x=x+5;
x+=5


// console.log('Hello')
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);

//-----------------------------------------------------------------------------------
// Increment (++)
console.log(x)
console.log(y>3);
// strict equality(type +value)
console.log(y===3);
//lose equality(not care the type )
console.log('1'==1)
console.log(true ==1);
console.log(y!==3);


//-----------------------------------------------------------------------------------
//Ternary Operator
let points = 90;
let type = points > 100 ? 'gold': 'silver';
console.log(type);

//-----------------------------------------------------------------------------------
//logical Operator
// And (&&)  

let highIncome = true;
let goodCredit = true;
let eligibleForloan = highIncome&& goodCredit
console.log(eligibleForloan);

// or (||)  
let highIncome2 = false;
let goodCredit2 = true;
let eligibleForloan2 = highIncome || goodCredit
console.log(eligibleForloan2);


//Not(!)
let applicationRefused = !eligibleForloan
console.log(applicationRefused);

//-----------------------------------------------------------------------------------
//Logical Operators with Non-booleans
//falsy
// undefined, null, 0, false, '',NaN
//Anthing that is not falsy -> truthy
// it will return first truthy value


let userColor =null;
let defaultColor ='blue';
let currentColor =userColor || defaultColor;

console.log(currentColor);



//-----------------------------------------------------------------------------------
//Bitwise Operators
// and (&)
// Or (|)
// for or it will add up  000000100 | 00000010 ----> 00000110  
// for And it will check the line 000000100 & 00000010 ----> 00000000 ;  000000110 & 00000010 ----> 00000010

//-----------------------------------------------------------------------------------
//exercise

let a ='red';
let b ='blue';

let c = a;
a =b;
b=c;

console.log('exercise')
console.log(a);
console.log(b);

