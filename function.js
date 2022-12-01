// function declaration
function walk(){
    console.log('walk');
}

//Anonymous function Expression
let run = function(){
    console.log('run');
};

run();

let move = run;

move();


//--------------------------------------------------------------
//hoisting

// the function decalration can call before it decalare
// the Function expression only can call after  it decalare

// the hoisting is the move the fucntion of the declaration to top of the documentation


//--------------------------------------------------------------
//arguments

function sum()
{
    let sum = 0;
    for (let element of arguments)
        sum += element;
    return sum;
}

console.log(sum(1,3,5));


//--------------------------------------------------------------
//rest operator 

function sum2(...args){
    return args.reduce((a,b) => a + b)
}

//--------------------------------------------------------------
//Default Parameters


function interest(principal, rate =3.5,years = 5){
    // rate = rate || 3.5;
    // years = years|| 5;
    return principal*rate/100* years;
}


//--------------------------------------------------------------
//getter and setter

const person ={
    firstName : 'Mosh',
    lastName : 'owen',
    get fullName(){ return `${person.firstName} ${person.lastName}`},
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('value is not a string.');
        const parts = value.split(' ');
        if (parts.length !=2)
            throw new Error('Enter a first and last name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullName= '';
}
catch (e){
    alert(e);
}

console.log(person);

// getters => access properties
//setter => change the properties


//--------------------------------------------------------------
//scope


