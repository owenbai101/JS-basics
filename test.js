const bigCircle ={
    radius : 5,
    drawNow(){
        console.log('draw');
    }
} ;

for(let key of Object.keys(bigCircle))
    console.log(key);

for(let value of Object.values(bigCircle))
    console.log(value);

for(let entrie of Object.entries(bigCircle))
console.log(entrie);