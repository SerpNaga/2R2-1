const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    // res.write("<h1>Hell</h1><img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png\">");
    let img = fs.readFileSync("SP.png")
    
    console.log(img)
    res.write(img)
    res.end();

})
const PORT = 3001

server.listen(PORT, err=>{
    console.log(`Server starting on port ${PORT}`)
})

// 127.0.0.1:3000