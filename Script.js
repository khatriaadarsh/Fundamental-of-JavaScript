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

   //--->Map : Map is higher order function that is used to iterate over the array and transform each element of    the   each array according to callback function 
      // -> The map() function return a new array containing the result of applying callback function to each element of the orginal array 

      const numbers = [1,2,3,4,5];
        //Values of numbers passing by num and then return the double of the num
      const doubleNumbers = numbers.map((num)=>{
           return num * 2;
      });
      console.log(doubleNumbers);
      