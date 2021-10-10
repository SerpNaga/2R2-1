const http = require("http");
const fs = require("fs");
const url = require("url");
 
const PORT = 3002;
const mimeTypes = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".ico": "image/ico",
    ".csv": "text/csv"
}
 
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        fs.readFile("./public/What.html", (e, d) => {
            res.write(!e ? d : "pepepepepe", "utf-8");
            res.end()
        })
    } else {
        let fileExt = req.url.split(".");
        fileExt = "." + fileExt[fileExt.length - 1]
        console.log(fileExt)
        if(fileExt !== ".ico"){
                res.writeHead(200, {
                "Content-Type": mimeTypes[fileExt]
            })
        }
        
        if (fileExt === ".png" || fileExt === ".jpg") {
            fs.readFile("./public" + req.url, (e, d) => {
                res.write(d, "binary");
                res.end()
            })
        }else{
            fs.readFile("./public" + req.url, (e, d) => {
                res.write(d, "utf-8");
                res.end()
            })
        }
    }
})
 
server.listen(PORT, err => console.log("HEEEEEEEEEEE?"))