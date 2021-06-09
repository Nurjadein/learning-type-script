
// MULTIPLE TYPE
let year:string | number;
year = "strinf";
console.log(year);
year = 12;
console.log(year);
year = "12";
const parsedYear = parseInt(year);
console.log(year);
 

//ARRAYS and their TYPES
let arrString: string[] = ['a','dsf','fgd'];
let arrNumber: number[] = [1,2,3];
let arrBoolean: boolean[] = [true,false];
let arrMix: (string|number|boolean)[] = ['ad',true,3];
let arrTup:[string,number] = ['a',1];
console.log(arrString);
arrString.push('kjdhf');
console.log(arrString);
console.log(arrMix);
arrMix.push(true);
console.log(arrMix);

//OBJECTS
let person = {
    name: "Johnny",
    age: 23
}
console.log(person);
console.log(person.name+person.age);
person.name = "Phay";
if(person.name == "Phay")
person.age = 28;
console.log(person.name+person.age);

//CUSTOM TYPE (type aliases)
type stringOrNum = string | number;
let variable: stringOrNum;
variable = 2021;
console.log(variable);
variable = "2021";
console.log(variable);

//FUNCTION
function sum(a:number,b:number){
    return a + b;
}
console.log("1 + 3 = " + sum(1,2));

//ARROW FUNCTION - c? is optional parameter
let calc:(a:number,b:number,c?:number) => number;

calc = (first:number,second:number)=>{
    return first + second;
}
console.log(calc(1,2));

//VOID
const sayHi = () => {
   return console.log("void");
}

//INTERFACES
interface PersonInterface{
    name: string;
    age: number;
}