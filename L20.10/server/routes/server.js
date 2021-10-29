const router = require("express").Router()

router.get('/personal', (rq, rs)=>{
    const name = rq.query.name
    const img = rq.query.img
    //console.log(rq.query)
    rs.send(
        `<div>
            <img style="width: 300px;
            height: 300px;
            border-radius: 50%;
            object-position: center;
            object-fit: cover;" src="${img}" alt="${name}">
            <h1>${name}</h1>
            <a href="../">back</a>
        </div>`
    )
})

module.exports = router