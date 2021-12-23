
const startingMinutes = 25;
let time = startingMinutes * 60;

const countDown = document.getElementById('countdown')

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    countdownEl.innerHtml = `${minutes}: ${seconds}`;
    time--;
}

function stopCountdown(){

}

function resetCountdown(){

}
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
