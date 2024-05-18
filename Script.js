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

//  const person = {
//    firstName: 'Aadarsh',
//    lastName: 'Kumar',
//    Age: 20,
//    address:{
//       street: 'Block 5 DHA',
//       City: 'Karachi',
//       Country: 'Pakistan'
//    },
//    hobbies: ['Coding','Movies','Singing']
//  };
//  console.log(person)
//  // Accessing properties of the object
//  console.log(person.firstName); // Output: John
//  console.log(person.Age); // Output: 30
//  console.log(person.address.City); // Output: Anytown
//  console.log(person.hobbies[1]); // Output: coding 
 
 //==> Function: Function allow you to encapsulate  and resuse block of code
 // - Making your code more modular and easier to maintain.
   // ==>Difference between arrow function and Regular function 
   // Arrow function doesn't have its own this, arguments, super, or new.target. The this value of the enclosing execution context.

   // arrow functions and regular functions have differences in syntax, behavior with this context, handling of arguments object, usage as constructors, and availability of super keyword.

   //  Choose the appropriate type of function based on your specific requirements and coding style preferences.

//--> Code Example of Regular
     // We define a regular function named factorial that calculates the factorial of a non-negative integer n.
     // Define a regular function to calculate the factorial of a number
//      function fact( n ){
//       // Check if n is less than 0
//        if(n < 0){
//           return 'Invailed Input: factorial of negative number is undefine. ';
//        }
//        // Base case: factorial of 0 is 1
//        if(n == 0){
//          return 1;
//        }
//        // Recursive case: n * factorial(n - 1)
//        return n * fact (n - 1);
//    }
// // Call the function to calculate the factorial 
//    const result = fact( 4 );
//    console.log(`The factorial is: ${result}`);

   // //-->Code example of Arrow function 
   //    // Define Arrow function to calculate the factorial of number   
   //    const fact = (n) =>{
   //    // Check if n is less than 0
   //    if(n < 0){
   //     return 'Invailed Input: factorial of negative number is undefine. ';
   //    }
   //    // Base case: factorial of 0 is 1
   //    if(n == 0){
   //    return 1;
   //    }
   //   // Recursive case: n * factorial(n - 1)
   //   return n * fact( n - 1 );
   //   }
   //  // Call the function to calculate the factorial of 5
   //   const result = fact(5);
   //   console.log(`The factorial is: ${result}`);


   // Asynchronous JavaScript refers to technique that allow your JavaScript code to perform tasks without the main thread.

   // This means that while a task is being processed like fetching data from an API, the browser can continue to respond to other user interaction making the web application more efficiet and responsive

   // ->Ways to handle asychronous operation are callback, promises, and async/await.

   //---> The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

   // 1. CallBacks: A callback is a function into another function as an argument which is then invoked inside the outer function to complete some kind of routine of action.
 
   // function fetchData(callback){
   //    setTimeout(()=>{
   //      const data = {name: 'Aadarsh', Age: 30};
   //      callback(data);
   //    },2000)
   // }
   // //Data passing through argument
   // fetchData((data)=>{
   //    console.log(data);
   //    })

   // 2. Promises: Promises provide a more powerful and flexible way to handle asynochronous operation. A promise represents a value that may be available now or the future or never

//    function fetchData() {
//       return new Promise((resolve, reject) => {
//           setTimeout(() => {
//               const data = { name: "Jane", age: 25 };
//               resolve(data);
//           }, 2000);
//       });
//   }
  
//   fetchData()
//       .then(data => {
//           console.log("Data received:", data);
//       })
//       .catch(error => {
//           console.error("Error:", error);
//       });

//   // 3. Async/Await: Async/Await is a new feature in JavaScript that allows you to write asynchronous code in a more synchronous 
  
// function fetchData() {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            const data = { name: "Alice", age: 28 };
//            resolve(data);
//        }, 2000);
//    });
// }

// async function handleData() {
//    try {
//        const data = await fetchData();
//        console.log("Data received:", data);
//    } catch (error) {
//        console.error("Error:", error);
//    }
// }

// handleData();

