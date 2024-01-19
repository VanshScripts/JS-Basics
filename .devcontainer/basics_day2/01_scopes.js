
if (true) {
    var a =69
    let b = 30
    const c = 55  
}
console.log('VALUE:' , a); // a will be printed because var is acccesable outside the local scope. NOT GOOD FOR PROGRAMS
console.log('VALUE:' , b); // b will not be printed because it is not defined globally.SCOPE REMAINS INSIDE THE {}
console.log('VALUE:' , c); // c will not be printed because it is not defined globally.SCOPE REMAINS INSIDE THE {}


// VAR - variables declared with var can be accessed anywhere in the program and the values can override.

// LET - variables declared with let can accessed only inside the local scope and CAN BE OVERRIDDEN.

// CONST - variables declared with const can only be accessed in the local scope and CANNOT BE OVERRIDDEN. 
