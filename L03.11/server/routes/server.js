const router = require('express').Router()
const link = [{marka: "Audi", model:"Audi"},
{marka: "Toyota", model:"Land Cruiser"},
{marka: "Audi", model:"Audi"},
{marka: "Audi", model:"Audi"}]
// router.get("/", (rq, rs)=>{
//     rs.render("index", {caption: "Hello!"})
// })
// router.get("/page", (rq, rs)=>{
//     rs.render("page", {caption:"D Page"})
// })

router.get("/", (rq, rs)=>{
    rs.render("index", {
        title: "Main Page", 
        caption: "Главная страница", 
        links: link
    })
})
router.get("/page/:marka,:model", (rq, rs)=>{
    rs.render("page", {
        title: "Page", 
        caption: rq.params.marka +" "+ rq.params.model,
        links: link
    })
})

module.exports = router