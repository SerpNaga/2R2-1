const router = require("express").Router()

router.get("/", (req, res)=>{
    res.render("index", {
        list: ["Discord", "Apple Jack", "Twilight", "Pinkie"]
    })
})
router.get("/new", (req, res)=>{
    res.render("form")
})
router.get("/add", (rq, rs)=>{
    console.log(rq.query)
    rs.send({msg:'nice'})
})

module.exports = router