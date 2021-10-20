const router = require("express").Router()

router.get("/", (req, res)=>{
    res.send("Main Page")
})
router.get("/2", (req, res)=>{
    res.send("Page 2")
})

module.exports = router