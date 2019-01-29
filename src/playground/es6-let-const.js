
var name = "chetan"; 
var name = "mahajan";// allowed
let lName= "mahajan";
lName="abc";
//let lName= "chetan";//not allowed dublicate declartion using let
const Name= "chetan";
//const Name= "chetin" //not allowed dublicate declartion
//Name ="mahajan"; // cant change the value bcz declartion using the const #const declation is read only
console.log("hello" +Name);

function getName(){
    var fName="chetin"
    return fName;
}

//console.log(fName); // fName is not defined
const namee=getName();
getName();
console.log(namee);
var fullName="chetin mahajan";
if(fullName){
    let firstName=fullName.split(" ")[0];
    console.log(firstName);
}
console.log(firstName);