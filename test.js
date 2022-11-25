function except(array, excluded)
{
    const output = [];
    for(let element of array)
        if(!excluded.includes(element))
            output.push(element);
}

let array1 =[1,3,5,4,3];

const output = except(array1,[3]);

console.log(output);