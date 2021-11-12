const addPony = document.forms.add

addPony.addEventListener("submit", e=>{
    e.preventDefault()
    let data = {}
    let childArr = e.target.elements
    for(let i = 0, cnt = childArr.length; i<cnt; i++){
        if(childArr[i].name){
            data[childArr[i].name] = childArr[i].value
        }
    }
    console.log(data)
    sendForm(data)
})

const sendForm = async function(body){
    let str = ""
    for(let k in body){
        str += k + "="+body[k] + "&"
    }
    let res = await fetch("/add?" + str)
    let data = await res.json()
}