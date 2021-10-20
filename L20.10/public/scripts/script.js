let data = [
    {name:"Jess", src:"../images/1.png"},
    {name:"Bob", src:"../images/2.png"},
    {name:"Alice", src:"../images/3.png"},
    {name:"Maria", src:"../images/4.png"}
]

const outr = document.querySelector(".container")
data.forEach(el => {
    outr.innerHTML += `<div class="card">${el.name}</div>`
})