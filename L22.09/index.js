const fs = require("fs")
const f = require("../functions")


function Auto(a, b, c){
    this.model = a;
    this.color = b;
    this.year = c;
}

Auto.prototype.changecolor = function(){
    this.color = f.getRGB()
}

let cnt = 100
let park = []
while (cnt--){
    park.push(new Auto("Tesla", "rgb(45, 154, 89)", 2020))
}
for(let i = 0; i < park.length; i++){
    park[i].changecolor()
}
park.sort((a, b) => {
    return a.color > b.color ? -1 : 1;
})
console.log(park)




// Object.prototype.toString = function(){
//     str = 
//     return str
// }
// let word = new String("ololo")
// let x = new Number(4)
// console.log(word.toString())
// console.log(x.toString())
// console.log(false.toString())
// let obg = {x:5, y:2}
// console.log(park[3].toString())



class Point {
    constructor(x, y){
        this.x = x 
        this.y = y 
    }
    show() {
        let str = "[\n"
        for (let k in this){
            if(typeof this[k] !== "function"){
                str += ` ${k}: ${this[k]}\n`  
            }
        }
        str += "]"
        return str
    }
}

class Point3D extends Point{
    constructor(x, y, z){
        super(x, y)
        this.z = z
    }
}

let A = new Point(f.getNumber(), f.getNumber())
let B = new Point(f.getNumber(), f.getNumber())
let C = new Point3D(f.getNumber(), f.getNumber(), f.getNumber())
console.log(A.show())
console.log(B.show())
console.log(C.show())