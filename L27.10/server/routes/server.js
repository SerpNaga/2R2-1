const router = require('express').Router()
const link = ["about", "contacts", "faq", "products"]
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
router.get("/page/:name", (rq, rs)=>{
    rs.render("page", {
        title: "Page", 
        caption: rq.params.name,
        links: link
    })
})

module.exports = router