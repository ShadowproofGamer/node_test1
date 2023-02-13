
let glassArr = [{gtype: "normal", transparency: 0.99, special:null}, {gtype: "tainted", transparency: 0.95, special: "warp"}, {gtype: "dark", transparency: 0.4, special: null}];
class Car {
    constructor(glassType : 0|1|2){
        this.windows = glassArr[glassType];
        this.name = "car";
        this.wheels = 4;
    };
    name:string = "car";
    wheels:number = 4;
    windows: any;


}

console.log(glassArr)
console.log((new Car(0)).windows)
console.log((new Car(2)).windows.transparency)
console.log((new Car(1)))