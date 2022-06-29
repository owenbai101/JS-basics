
// if 
let hour =13;

if(hour >=6 && hour <12){
    console.log('Good Morning')
}
else if(hour >=12 && hour <18){
    console.log('Good Afternoon')
}
else
    console.log('Good Night')

// switch

let role;

switch(role){
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('moderator user');
        break;
    
    default:
        console.log('Unknow Role');

}


//loop

for(let i =0;i <5;i++)
{
    console.log('hello World')
}

let i = 0;
while(i<=5)
{
    if(i%2 !==0) 
        console.log(i);
    i++;
}

// do while 

do{
    if(i%2 !==0) 
        console.log(i);
    i++;
} while(i<=5);

// for-in 

const person ={
    name: 'Mosh',
    age: 30
}

for (let key in person)
{
    console.log(key,person[key]);
}

const colors =['red','green','blue'];

for(let index in colors)
{
    console.log(index,colors[index]);
}

// for of

for (let color of colors)
{
    console.log(color);
}
