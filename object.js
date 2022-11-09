
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


let customer={
    name: 'owen'
};

customer.tel = '12345';
customer.address ='abcd';

delete customer.tel;

console.log(customer);