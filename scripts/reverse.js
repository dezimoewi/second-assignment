//Write a function to reverse a string e.g Hello => olleH

function reverseString(str) {
    let reversed = ""; 

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }

   console.log(reversed);
   
}

reverseString("kisito")
