//Stack memory (use in primitive DT)
let name="vansh";
let nickname="raja";
nickname=name;
console.log(nickname);
console.log(name);


//Heap memory (use in non-primitive DT)
let user={
    mail:"tara@gmail.com",
    number:23232
}
let user2 = user;

user2.mail="guju@gmail.com"
console.log(user2.mail);
console.log(user.mail);
