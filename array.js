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