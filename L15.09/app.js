let lolo = require("fs")
// const cb = function(err, data){
//     console.log(err)
//     console.log(data)
// }
// cb()
// console.log(cb)
let text;
lolo.readFile('animals.csv', {encoding: "UTF-8"}, function(err, data){
    if(err){
      throw new Error(err)  
    }else{
        text = data
       console.log(data) 
    }
})
console.log(text)
setTimeout(()=> console.log(text), 2000)

// {
//     "Пони"{
//         цвет: "екфтызфкуте",
//         возраст: 5
//     }
// }