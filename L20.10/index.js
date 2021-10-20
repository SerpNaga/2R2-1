const express = require("express");
const router = require("./server/routes/server")
const port = 3008;

const app = express();

app.use("/", router)
app.use(express.static("./public"))

app.listen(port)