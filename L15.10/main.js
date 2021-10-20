const exp = require("express")
const PORT = 3004

const r1 = require("./routes/mainrouter")
const r2 = require("./routes/additionalrouter")

const serv = exp()
serv.get("/", (req, res)=>{
    res.send("hey, b/*//ccch")
})

serv.use("/", r1)
serv.use("/add", r2)

serv.listen(PORT)