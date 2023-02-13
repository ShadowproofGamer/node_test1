let val: unknown = 22;
val = "to jest łańcuch";
val = new Array();
if (val instanceof Array){
    val.push(33)
}
console.log(val);

let obj: {name:string}&{age:number}  = {
        name:'Tomek',
        age: 25
    };
console.log(obj);

let unionObj: null | {name:string} = null;
unionObj = {name: 'Janek'};
console.log(unionObj);

let literal: "Tomek" | "Linda" | "Jarek" | "Sylwia" = "Linda";
literal = "Sylwia";


console.log("imie: "+literal);

type Points = 20 | 30 | 40 | 50;
let score: Points = 20;

console.log("wynik: "+score);

type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
}

function runMore(distance: number): number {
    return distance + 10;
}

function eat(calories:number){
    console.log("Zjadłem"+calories+"kalorii");
}
function sleepIn(hours:number):void {
    console.log("Spałem"+hours+"godzin");
}

let ate = eat(100);
console.log("kalorie: "+ate);
let slept = sleepIn(10);
console.log("sen: "+slept);

type Run = (miles:number) => boolean;
let runner: Run = function (miles:number):boolean {
    if(miles > 10){
        return true;
    }
    return false;
}
console.log(runner(9));

function oldEnough(age: number): never | boolean {
    if(age > 59) {
        throw Error("Jesteś za stary");

    }
    if (age <= 18){
        return false
    }
    else return true
}

