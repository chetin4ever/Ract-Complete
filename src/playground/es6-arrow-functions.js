// argument object no longer bound with arrow function

function add(a,b){
    console.log(arguments)
    return a+b;

};

console.log(add(10,20,30));

// using arrow operator


const add1 =(a,b)=>{
    //console.log(arguments); //arguments is not defined
    return a+b
};
console.log(add(10,20));

const multiplyer={
    numbers:[0,1,2,3,4,5,6,7,8,9,10],
    multiplyby:2,
    multiply(){
        return this.numbers.map((number)=>  {
            return number* this.multiplyby;
        });
    }
}
console.log(multiplyer.multiply());