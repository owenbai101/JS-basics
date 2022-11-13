const address ={
    street:"senja",
    city:"singapore",
    zipcode:670630,
    //showAddress : function(){
    //  for(entry of Object.entries(address))
    //      console.log(entry);
    } 
function showAddress(address)
{
    for(let key in address)
        console.log(key, address[key]);
}
showAddress(address);


//-------------------------------------------------------------------------

function createAddress(street,city,zipCode){
    return{
        street:street,
        city:city,
        zipcode:zipCode,
        showAddress(){
            for(let key in address)
            console.log(key, address[key]);
        }
    }
}
let newaddress = createAddress('a','b','c');

function CreateShowAddress2(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipcode = zipCode;
    this.showAddress2 =function(){
        for(let key in address)
        console.log(key, address[key]);
    }
}

let newAddress2 = new CreateShowAddress2('a','b','c')

//-------------------------------------------------------------------------

function areSame(address1,address2)
{
    return address1 ===address2;
}

function areEqual(address1,address2)
{
    return address1.street =address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}

//-------------------------------------------------------------------------

let post ={
    title :'a',
    body:'b',
    author:'c',
    views:10,
    Comments:[
        {author:'a',body:'b'},
        {author:'c',body:'d'},
    ],
    islive:true
};
console.log(post);

//-------------------------------------------------------------------------
//Constructor Functions

function Post(title,body,author){
    this.title =title;
    this.body =body;
    this.author =author;
    this.views =0;
    this.Comments=[];
    this.islive =false;
}
let post2 =new Post('a','b','c');
console.log(post2);


//-------------------------------------------------------------------------
//Price Range Object

let priceRanges=[
    {label:'$',tooltip:'Inexpensive',minPerPerson:0,maxPerperson:10},
    {label:'$$',tooltip:'Moderate',minPerPerson:11,maxPerperson:2},
    {label:'$$$',tooltip:'Expensive',minPerPerson:21,maxPerperson:50},
]
let restaurants =[
    {averageperPerson:5}
]