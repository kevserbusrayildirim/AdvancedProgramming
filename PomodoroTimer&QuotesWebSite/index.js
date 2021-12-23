
let list = []
const text = document.getElementById("text")
const author = document.getElementById("author")


function randomInt(){
    return Number(Math.floor(Math.random() * 1600));
}

function fetchDatas(){
    fetch("https://type.fit/api/quotes")
    .then(res => res.text())
    .then(res => {
        list = JSON.parse(res)
        let myData = list[Math.floor(Math.random() * 1600)]
        text.innerText = myData.text 
        author.innerText = myData.author 
    })
}




fetchDatas()
