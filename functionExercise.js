
function sum(...args)
{
    if(args.length ===1 && Array.isArry(args[0]))
        args=[...args[0]];
    return args.reduce((a,b) => a + b)
}

console.log(sum(1,4,9))


//-------------------------------------------------------------------
//  GETTER AND SETTER 

const circle ={
    radius : 1,
    get area(){
        return Math.PI * this.radius * this.radius;
     }
    
};

//-------------------------------------------------------------------
//  ERROR HANDLING



function checkOccurences(array, searchElement){
    if(!Array.isArray(array))
        throw new Error('Invalid array');

    return array.reduce((accumulator,current) => {const occurence = (current === searchElement)? 1:0;
    console.log(accumulator,current,searchElement);
    return accumulator+occurence},0)
}

try{const occurenceArray = [1,2,4,5,1,1]

    let final = checkOccurences(null,1);
    console.log(final);
}
catch(e)
{
    console.log(e.message);
}
