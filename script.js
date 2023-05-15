setInterval(setClock,1000)


const allNum = document.querySelectorAll('.number')

for (num of allNum){
    num.style.transform = `rotate(${30*num.innerText}deg)`
}

const hoursHand = document.querySelector('#hourhand')
const minuteshand = document.querySelector('#minuteshand')
const secondsHand = document.querySelector('#secondshand')


function setClock() {
    const currentDate = new Date; 
    const seconds = currentDate.getSeconds()/60; 
    const minutes = (seconds + currentDate.getMinutes())/60;
    const hours = (minutes+currentDate.getHours())/12;

    setRotation(secondsHand,seconds)
    setRotation(minuteshand,minutes)
    setRotation(hoursHand,hours)
}

function setRotation(element,value) {
    element.style.transform = `rotate(${value*360}deg)`
}

setClock()