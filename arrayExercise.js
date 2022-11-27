
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
    

//--------------------------------------------------------------
//check occurence

function checkOccurences(array, searchElement){
    // let count = 0;
    // for(let element of array)
    //     if (element === searchElement)
    //         count++;
    
    // return count;
    return array.reduce((accumulator,current) => {const occurence = (current === searchElement)? 1:0;
    console.log(accumulator,current,searchElement);
    return accumulator+occurence},0)
}

const occurenceArray = [1,2,4,5,1,1]

let final = checkOccurences(occurenceArray,1);
console.log(final);



//--------------------------------------------------------------
//get max

function getMax(array)
{
    if(array.length ===0)
        return undefined;
    // let max = array[0];
    // for(let element of array)
    //     if (element > max)
    //         max = element
    // return max;   
    
    return array.reduce((accumulator,currentvalue) => {const max = (accumulator > currentvalue)? accumulator : currentvalue;
    return max;})
}

let maxArray = [1,2,8,4];

let finalresult = getMax(maxArray);
console.log(finalresult);

//--------------------------------------------------------------
//movies

const movies =[
    {title:'a', year:2018,rating: 4.5},
    {title:'b', year:2018,rating: 4.7},
    {title:'c', year:2018,rating: 3},
    {title:'d', year:2017,rating: 4.5},
]

// get all movies in 2018 with rating > 4
//sort them by rating
//descending order
// pick their title

const title =movies
.filter(m => m.year ===2018 && m.rating > 4)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(m => m.title);

console.log(title);