
function arrayFromRange(min,max){
    const array =[];
    for(let i= min; i <= max; i++)
    {
        array.push(i)
    }
    
    return array;

}

const number =arrayFromRange(-3,8);
console.log(number);


//--------------------------------------------------------------


function includes(newarray,searchElement){
    for (let element of newarray)
        if (element === searchElement)
            return true;
    
    return false;
}

let array123 =[1,4,6,8]
const result = includes(array123,5);
console.log(result);