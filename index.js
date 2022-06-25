      let name = 'Owen'
      console.log(name);

      let interestRate = 0.3;
      interestRate =1;
      console.log(interestRate);

      let age;


    //object
      let person ={
        name:'Mosh',
        age:40
      };
      person['age']=32;
      person.name='owenbai'
      
      console.log(person);


      //array
      let selectColors = ['red','blue'];
      selectColors[2] ='green';
      // can save different type into one array
      selectColors[3] =1;
      console.log(selectColors[0]);
      console.log(selectColors);
      console.log(selectColors.length)


      // function
      function greet(name, lastName){
        console.log('Hello world ' + name +' '+ lastName);
      }
      greet('owen','Bai');
      greet('Mary','Zhang');

      //calculatiing a value

      function square(number)
      {
        return number*number
      }

    let number = square(3);
    console.log(number);