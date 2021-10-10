const http = require("http")
const fs = require("fs")
const url = require("url")
const PORT = 3002
const mimeTypes = {
    ".js":"text/javascript",
    ".css":"text/css",
    ".css":"image/png",
}

const s = http.createServer((rq, rs)=>{
    console.log(rq.url)
    fs.readFile("./publ/What,html", (e, d)=>{
        rs.write(!e ? d : "File Fell", "utf-8");


        
        rs.end()
    })
})

s.listen(PORT, err=> !err && console.log("hell"))