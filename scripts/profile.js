//Create a simple function that allows the user to create a profile with
//name, age and email and prints this in the console;

function createProfile() {
    let age = prompt("enter your age")
    let email = prompt("enter your email")
    let name = prompt("enter your name")

    console.log("age :" + age);
    console.log("email :" + email);
    console.log("name :" + name);
      
}

createProfile()