const router = require("express").Router()
const fs = require("fs")

let names = fs.readFileSync('./file.txt', 'utf-8').split("\r\n")
console.log(names)

router.get("/", (req, res)=>{
    res.render("index", {
        list: names
    })
})
router.get("/new", (req, res)=>{
    res.render("form")
})
//router.delete() - ??????
router.get("/add", (rq, rs)=>{
    console.log(rq.query)
    if(rq.query.name){
        names.push(rq.query.name)
        fs.writeFileSync("./file.txt", names.join("\r\n"), "utf-8", (err, data)=>{})
        rs.send({msg:"nice"})
    }else{
        rs.send({msg:'oops'})
    }
})

module.exports = router