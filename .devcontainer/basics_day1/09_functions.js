function vansh(){ // function is defined
    //console.log("hii , my name is vansh");
    //console.log("I am a multitasker");
}
vansh(); // function is called





function addNames(firstName , lastName){     // function with arguments 
//console.log(firstName + lastName);
}
addNames("Vansh", " Sharma") //values provided while calling 





function fullName(first , last){ //arguments stored in a variable and is returning the value when calling
    let name = first + last
    return name

}
const name = fullName("Vansh" , " Sharma");
//console.log("Mera Naam haii - " ,name);



function isLoggedIn(username) {   //use of string interpolation in functions
    return `${username} is logged in!`;
}

//console.log(isLoggedIn("vansh"));






// If user has not provided any input , in that case we casn check by using if else statement --- 
function isLoggedIn(username) {  
    if(!username){
        console.log("PLEASE ENTER THE USERNAME");
        return
    }
    return `${username} is logged in!`;
}
console.log(isLoggedIn("vansh"));



function bawa(){
    const yo="vanshhhh"
   // console.log(this.yo); // this does not work in functions
   console.log(this); // contains a lot a things
}
bawa()


    




