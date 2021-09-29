const http = require("http")
const server = http.createServer((request, response) => {
    //request - request from the user
    //response - response from the server
    response.write(`<h1
      style = "
        color:greenyellow;
        background:#222;
        text-align:center"
      >Hey!</h1>`);
    response.end();

})



server.listen(3000, err =>{
    if (err){
        console.log("all so sad :(")
    }else{
        console.log("BEEEEEEEEEEEEEES")
    }
})

// 127.0.0.1:3000