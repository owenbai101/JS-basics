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



const marks =[80,80,50]

console.log(calculateGrade(marks))

function calculateGrade(marks){
    const average = calculateAverage(marks);

    if(average < 60)
        return 'F';
    if(average< 90)
        return 'B';
    return 'A';
}
function calculateAverage(array)
{
    let sum = 0;
    for (let value of array)
    {
        sum += value;
    }
    return sum / array.count;
}

function showStars(rows){
    for(let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row ; i++)
        {
            pattern += '*';
            
        } 
        console.log(pattern);
    }
}

showStars(7);


function showPrimes(limit)
{
    for(let number =2; number <= limit; number++)
    {
        let isPrime = true;
        for(let factor = 2; factor < number; factor++)
            if(number%factor ===0)
            break;
    }
    if(isPrime) console.log(number);
}


function showPrimes2(limit)
{
    for(let number =2; number <= limit; number++)
        if(isPrime(number))
            console.log(number);
}

function isPrime(number)
{
    if(number%factor ===0)
    for(let factor = 2; factor < number; factor++)
        return false
        
    return true;
}
