// --->fundamentals of JavaScript:
   // Array and Object
   // Function return
   //Async js coding
   //foreach, Map, Filter, Find IndexOf

    // let arr = [1,2,3,4,5];
    // //The values of array passing through val parameter
    // arr.forEach(function(val){
    //     console.log(val + ":Student")
    // });

   //==>Map : Map is higher order function that is used to iterate over the array and transform each element of    the   each array according to callback function 
      // -> The map() function return a new array containing the result of applying callback function to each element of the orginal array 

      // map() is a versatile and commonly used array method for transforming array elements or generating new arrays based on existing ones.

      // const numbers = [1,2,3,4,5];
         // Values of numbers passing by num and then return the double of the num.
      // const doubleNumbers = numbers.map( (num) => {
      //      return num * 2;
      // });
      // console.log(doubleNumbers);

   //==> Filter: when we need some elemnt from array then use filter 
   //   let numbers = [1,2,3,4,5];
   //   let evenNumbers = numbers.filter( (val) => {
   //    return val % 2 === 0;
   //   })
   //   console.log(evenNumbers);

//   ==> Find:  The find() method is used to search for a specific element in an array based on a provided condition. 
// find() is useful when you want to find the first occurrence of an element in an array that matches a specific condition.
      //  let numbers = [1,2,3,4,5,6];
      //  let found = numbers.find( (val) => {
      //    return val > 2;
      //  }) 
      //  console.log(found);

//   ==>Object: An object is a collection of key-value pairs where each key is string or symbol and each value can be any data type including other object.
//    Objects in JavaScript are used to represent complex data structures and are one of the fundamental data types in the language.

 const person = {
   firstName: 'Aadarsh',
   lastName: 'Kumar',
   Age: 20,
   address:{
      street: 'Block 5 DHA',
      City: 'Karachi',
      Country: 'Pakistan'
   },
   hobbies: ['Coding','Movies','Singing']
 };
 console.log(person)
 // Accessing properties of the object
 console.log(person.firstName); // Output: John
 console.log(person.Age); // Output: 30
 console.log(person.address.City); // Output: Anytown
 console.log(person.hobbies[1]); // Output: coding    

