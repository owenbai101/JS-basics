function checkOccurences(array, searchElement){
    // let count = 0;
    // for(let element of array)
    //     if (element === searchElement)
    //         count++;
    
    // return count;
    return array.reduce((accumulator,current) => {const occurence = (current === searchElement)? 1:0;
    console.log(accumulator,current,searchElement,occurence);
    return accumulator+occurence},0)
}

const occurenceArray = [1,2,4,5,1,1]

let final = checkOccurences(occurenceArray,1);
console.log(final);