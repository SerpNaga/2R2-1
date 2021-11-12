const express = require("express");
const router = require("./server/routes/server")
const port = process.env.PORT || 3009;

const app = express();

app.set("views", "./server/views")
app.set("view engine", "hbs")

app.use("/", router)
app.use(express.static("./public"))



app.listen(port, (e)=> {e? "": console.log("sever running")})