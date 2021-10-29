let data = [
    {name:"Jess", src:"../images/1.png"},
    {name:"Bob", src:"../images/2.png"},
    {name:"Alice", src:"../images/3.png"},
    {name:"Maria", src:"../images/4.png"}
]

const outr = document.querySelector(".container")
data.forEach(el => {
    outr.innerHTML += `<div data-name="${el.name}" data-src="${el.src}" class="card">${el.name}</div>`
})

let other = document.createElement('div')
other.className = "card"
other.setAttribute("data-src", "../images/ex.png")
let inp = document.createElement('input')
inp.setAttribute("placeholder", "Enter your name")
inp.addEventListener('click', e=>{
    e.stopPropagation()
})
inp.addEventListener('input', e=>{
    e.target.parentElement.setAttribute("data-name", e.target.value)
})
other.append(inp)
outr.append(other)

cards = document.querySelectorAll(".card").forEach(el => {
    el.addEventListener('click', e => {
        //location.reload() - перезагрузить
    /*

    */
        location.replace(`./personal?name=${e.target.getAttribute('data-name')}&img=${e.target.getAttribute('data-src')}`)
    })
})