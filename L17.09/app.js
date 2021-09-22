class Person {
    constructor(surname, name, gender, birthdate){
        this.name = name
        this.surname = surname
        this.initials = `${name.charAt(0)}. ${surname}`
        this.gender = gender
        this.birthdate = birthdate
    }
}
const nowD = new Date();


cll = require("fs")
cll.readFile('ppl.csv', {encoding: "UTF-8"}, function(err, data){
    if(err){
      throw new Error(err)  
    }else{
        people = makeArray(data)
        people.sort((a, b) => {
            return getDiff(a) - getDiff(b)
        })
        people.forEach(element => {
            console.log(element.initials)
        })
    }
})

function makeArray(data){
    let arr = []
    let text = data.split("\n")
    text.shift()
    for(i of text){
        lne = i.split(";")
        let prs = new Person(lne[0], lne[1], lne[2], lne[3])
        arr.push(prs)
    }
    return arr
}

function getDiff(el){
    let checkD = new Date(el.birthdate)
    let year = nowD.getFullYear()
    checkD.setFullYear(year)
    if(checkD < nowD){
        year += 1
        checkD.setFullYear(year)
    }
    var diff =  checkD - nowD;
    return diff
}

