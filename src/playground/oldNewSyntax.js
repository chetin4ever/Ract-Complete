class OldSyntax{
    constructor(){
        this.name='Mike';
    }
    greeting(){
        return `hi this is ${this.name}`;
    }
} 
//--------------
class NewSyntax{
    name='jen'

    greeting=()=>{
        return `hi this is ${this.name}`;
    }
}
const oldName=new OldSyntax();
console.log(oldName);
const NeSyntax= new NewSyntax();
console.log(NeSyntax.greeting())
console.log(oldName.greeting())