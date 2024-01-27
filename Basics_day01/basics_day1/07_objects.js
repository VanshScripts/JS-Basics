//Object Literal


/* intialisation of object
const obj = {
    key:value,
    key:value
} */

const mySymbol = Symbol("key") //initialising symbol
const obj={
    name:"vansh",
    age:20,
    [mySymbol]:"key",
    mail:"vans6262@google.com",
    isLoggedIn:false
}
//console.log(obj["name"],obj["mail"] , obj["age"], obj["isLoggedIn"]);

//obj.mail="vansh7272@baba.com" // changing the value in object , overridding

//Object.freeze(obj) //object is freezed now , we can't change the values now

//obj.name="kaka"// no overridding after using freeze
//console.log(obj)




// object singelton , using constructor
const vanshobj={}
vanshobj.id="vans7233"
vanshobj.name="kaka"
vanshobj.isLoggedIn=false
//console.log(vanshobj);

const newobj={    //nested object
    name:{
        username:{
            fullname:{
                first_name:"kaka",
                last_name:"saka"
            }
        }
    },
    email:"vans7233@gmail.com",
    age:20
}
console.log(newobj.name.username.fullname , newobj.email ,newobj.age);


const obj1={1:"dd", 2:"gfh"}
const obj2={3:62, 4:24}

const obj3=Object.assign(obj1 , obj2) //assign method spreads the objects to form a single object
//console.log(obj3);

//console.log(Object.values(obj3)); //all values of the object 
//console.log(Object.keys(obj3)); //all keys of the object 
//console.log(Object.entries(obj3)); //all entries of the object in form an array

console.log(obj3.hasOwnProperty('3')); //returns boolean whether key is present in the object or not




