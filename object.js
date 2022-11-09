
const shape ={
    radius : 1,
    location :{
        x:1,
        y:1
    },
    isVisible :1,
    draw : function() {
        console.log('draw');
    }
};

shape.draw();


//Factor funtion

function createCircle(radius){
    return{
        radius,   // same as radius: radius
        draw() {
            console.log('draw');
        }
    };
}

const circle2 = createCircle(2);
console.log(circle2);


// Constructor Function

function Circle(radius)
{
    this.radius =radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();

let customer={
    name: 'owen'
};

customer.tel = '12345';
customer.address ='abcd';

delete customer.tel;

console.log(customer);

//------------------------------------------------------------------------------
//Enumerating Properties of an Object
const bigCircle ={
    radius : 5,
    drawNow(){
        console.log('draw');
    }
} ;

for(let key in bigCircle)
    console.log(key, bigCircle[key]);

for(let key of Object.keys(bigCircle))
    console.log(key);

for(let entry of Object.entries(bigCircle))
    console.log(entry);

if('radius' in circle) console.log('yes');

//-----------------------------------------------------------------------------------------
//cloning a object 

const smallCircle ={
    radius : 5,
    drawNow(){
        console.log('draw');
    }
} ;

const another ={};

for (let key in smallCircle)
    another[key] = smallCircle[key];

    console.log(another);
//second method

const another2 = Object.assign({},circle);

console.log(another2)

//third method

const another3 ={...circle};

console.log(another3)
//-----------------------------------------------------------------------------------------
//garbage collection 