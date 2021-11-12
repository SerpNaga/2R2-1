const express = require("express")
const router = require("./routes/router.js")
const app = express()
app.use(express.static("./public"))
app.set("view engine", "hbs")
app.set("views", "./views")

app.use("/", router)
// process.env - переменная среды {PORT: ??};
app.listen(process.env.PORT || 1011)

