const router = require("express").Router()

router.get("/", (req, res)=>{
    res.send("My page")
})
router.get("/secret", (req, res)=>{
    res.send("Secret Paeg")
})

module.exports = router