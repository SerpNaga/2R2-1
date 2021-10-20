const express = require("express")
const app = express()
const port = 3004;


app.use(express.static("./danya"))
// app.get("/",(req, res)=>{
//     res.send(`
//     `)
// })
app.get("/omnomnom",(req, res)=>{
    res.send(`
    <h1>omnomnom</h1>
    `)
})
app.get("/name",(req, res)=>{
    res.send(`
    <h1>namaname</h1>
    `)
})



app.listen(port, err => {
    console.log("Wow")
})