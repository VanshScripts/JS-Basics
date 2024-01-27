function addItems(...num){ //here ... is rest operator, here when input is not fixed. the output is generated inside an array.
    return num
}
//console.log("Items in the cart are -" , addItems(100,211,223,23));



function multipleItems(val1 , val2 , ...num2){
    return num2
    
}
///console.log(multipleItems(21,23,232,454,4652,23525,)); // here the value is being given to the variables present in the arguments one by one , the rest operator will keep rest of the  values after all single values are given to single variables.



const user = {   //object in function
    username:"vansh",
    password:"123asdfg"   
}

function userInfo(anyObject){ 
    //console.log(`Username is ${anyObject.username} and password is ${anyObject.password}`);
}
userInfo(user)



const myNewArray=[1,2,3,4,5] //Array in function
 function returnValue(secondValue) {
    return secondValue[2]
 }
 console.log(returnValue(myNewArray));