console.log(one(5)) //function is called before initialisation of the function. this is hoisting. 

function one(num){
    return num / 2
}


console.log(two(5));  // here in this case , we can not acces function two before initialisation of the function
const two = function(num){
    return num + 4
}

