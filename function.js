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