// named functions               
function sum(x,y){                  //here function keyword and function is present
    return x+y;
}
console.log(sum(5,6))



//anoymonous function.
 let data= function (x,y){      // here we no need of function name .
    return x+y;
}
console.log(data(5,8))  

//arrow function.

let data1= (x,y)=>{      // here we no need of function name and keyword .
    return x+y;
}
console.log(data1(5,9))  

//or
//arrow function.

let data2= (x,y)=> x+y;
console.log(data1(5,9))      // here we no need of function name and keyword .


//IIFE 

let data3=((x,y)=>{    // here we no need of function name and keyword and arguments() .
    return x+y;
})(5,20)
console.log(data3)
