let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")


setInterval(()=> {
    let cuurentTime = new Date();
    hours.innerHTML = cuurentTime.getHours();
    minutes.innerHTML = cuurentTime.getMinutes();
    seconds.innerHTML = cuurentTime.getSeconds();




},1000)

