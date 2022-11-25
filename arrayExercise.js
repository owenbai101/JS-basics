
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


//--------------------------------------------------------------
//except

function except(array, excluded)
{
    const output = [];
    for(let element of array)
        if(!excluded.includes(element))
            output.push(element);
    return output;
}

let array1 =[1,3,5,4,3];

const output = except(array1,[3]);

console.log(output);


//--------------------------------------------------------------
//except

function move(array,index,offset){
    const position = index + offset;
    if(position < 0 || position >= array.length0)
    {
        console.error('invalid offset');
        return 
    }
       
    const output =[...array];
    let element = output.splice(index,1)[0];
    output.splice(index+offset,0,element);
    return output;
}

const number2 = [1,2,3,4];
const resultMove = move(number2,0,2);
console.log(resultMove);
    
