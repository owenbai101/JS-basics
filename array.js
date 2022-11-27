const numbers = [3,4];
// add to end of array
numbers.push(5,6);

//add begin of array

numbers.unshift(1,2);

// add in middle of the array

numbers.splice(2,0,'a','n');

console.log(numbers);

//--------------------------------------------------------------------------------------
// find the elements

const abc =[1,2,3,1,4]
console.log(abc.indexOf(1));
console.log(abc.includes(1));
console.log(abc.indexOf(1,2))

//--------------------------------------------------------------------------------------
// find the reference elements

const courses =[
    {id:1, name: 'b'},
    {id:2, name: 'c'},
];

const course = courses.find(function(course){
   return course.name ==='b';
});

const course2 = courses.findIndex(function(course){
    return course.name ==='b';
 });

console.log(course);

//--------------------------------------------------------------------------------------
// arrow function

const course3 = courses.find((course) =>course.name ==='b');
 


//--------------------------------------------------------------------------------------
// remove elements

const numbers1 =[1,2,3,4]

// remove at end
 const last = numbers1.pop();
 console.log(numbers1);
 console.log(last);

 //beginning

 const first = numbers1.shift();
 console.log(numbers1);
 console.log(first);

 //Middle(frist param is start from, second param is how many need to delete)
 numbers.splice(2,2);


 //--------------------------------------------------------------------------------------
// empty elements

let numbers2 =[1,2,3,4];

//solution 1 
numbers2 =[];

//solution 2(best)

numbers2.length =0;

//solution 3

numbers2. splice(0,numbers2.length);

//soltion 4
while(numbers2.length > 0)
    numbers2.pop()

 //--------------------------------------------------------------------------------------
// combine arrays


const firsta = [1,2,3,4];
const seconda = [5,6,7]

const combine = firsta.concat(seconda);

//slice array
const slice = combine.slice(2,4)

 //--------------------------------------------------------------------------------------
// spread operator

//combine two array 
combine2 = [...firsta,...seconda];

// copy array
const copy =[...combine2];


 //--------------------------------------------------------------------------------------
// iterating operator

const arrayNumbers =[1,2,3,4];

for(let number of arrayNumbers)
console.log(number)

arrayNumbers.forEach(number =>console.log(number));

arrayNumbers.forEach((number,index) =>console.log(number));

 //--------------------------------------------------------------------------------------
// Joining Arrays

const numberArray =[1,2,3]
const joined = numberArray.join(',');
console.log(joined)

const message ="this is my message";
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

 //--------------------------------------------------------------------------------------
// sort Arrays

const sortnumber =[2,3,1];
sortnumber.sort();
console.log(sortnumber);

sortnumber.reverse();
console.log(sortnumber);

const courses2 = [
    {id:1,name:'Node.js'},
    {id:2,name:'javaScript'},
];

courses2.sort(function(a,b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
})

console.log(courses2);

 //--------------------------------------------------------------------------------------
// testing Arrays

const testNumber =[1,2,3];
const allPositive = testNumber.every(function(value){
    return value >= 0;
});

const atLeastOnePositive = testNumber.some(function(value){
    return value >= 0;
});

 //--------------------------------------------------------------------------------------
// filter Arrays
const FilterNumbers =[1,-1,2,4];

const filtered = FilterNumbers.filter(value => value >=0);

console.log(filtered);

 //--------------------------------------------------------------------------------------
// mapping Arrays

const items = filtered.map(n => '<li>' + n + '</li>')
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
console.log(items);


const objItems =filtered.map(n => {
    return {value: n};
})

console.log(objItems);


//--------------------------------------------------------------------------------------
// reducing array

const cost = [ 2,4,6];

let sum = 0;
for( let n of cost)
    sum += n;

console.log(sum);

const sum2 = cost.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},0); 

