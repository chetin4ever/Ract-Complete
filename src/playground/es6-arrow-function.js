function square(x){
    return x*x;
}

console.log(square(8));

//using arrow operator
const square1 = (x)=>{
    return x*x;
}

console.log(square1(7));

const square2 = (x)=>x*x;

console.log(square2(9));

const fullName="chetan Mahajan";
const firstName =()=>{
    var f= fullName.split(" ")[0];
    return f;
}

const firstName1 =()=> fullName.split(" ")[0]; 

console.log(firstName());
console.log(firstName1());
