//Create a function calculate(a, operator, b) that supports +, -, *, and /



function operator(a, operator, b) {
    if(operator === "+"){
        console.log(a + b);
        
  
    } else if(operator === "-") {
        console.log(a - b);
        
    } else if(operator === "*") {
        console.log(a * b);
        
    } else if(operator === "/") {
        if(b === 0) {
           console.log("Error number can't be divided by zero");
           
        }
        console.log(a / b);
        
    }
    else {
        console.log("Error");   
    }

} 

operator(2, "*" , 5)