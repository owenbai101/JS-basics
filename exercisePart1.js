function maxNumber(number1, number2)
{
    // if(number1>= number2)
    //     return number1; 
    //     return number2;
   return (number1 > number2) ? number1 : number2; 
}

let number = maxNumber(3,6);
console.log(number);


function isLandscape(width, height){
    return(width > height); 
}


function fizzBuzz(input)
{
    if(typeof input !== 'number')
        return NaN;

    if((input % 3 === 0) && (input % 5 === 0))
        return 'fizzBuzz';

    if(input % 3 === 0)
        return 'fizz';
    
    if(input % 5 === 0)
        return 'Buzz';

    return input;
}

checkSpeed(77);

function checkSpeed(speed)
{
    const speedlimit = 70;
    const kmPerPoint = 5;
    if(speed <= speedlimit+kmPerPoint)
        console.log('ok');
    else
    {
        const points = Math.floor((speed-speedlimit)/kmPerPoint);
        if(points>12)
            console.log('License suspended');
        else
            console.log('Points : ', points);
    }
}


function counttruthy(array){
let count = 0;
for(let value of array)
{
    if(value)
        count++;
    return count;
}
}


function showproperties(obj)
{
    for(let key in obj)
    {
        if(typeof obj[key]==='string')
            console.log(key,obj[key])
    }
}


function sum(limit)
{
    let sum = 0
    
    for(let i = 0;i <= limit; i++)
    {
        if(i % 3 ===0 || i % 5 === 0)
            sum += i;
    }

    return sum;
}
