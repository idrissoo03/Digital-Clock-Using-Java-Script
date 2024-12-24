let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let days = document.getElementById("Days")
let months = document.getElementById("Months")
let years = document.getElementById("Years")


setInterval(()=> {
    let cuurentTime = new Date();
    hours.innerHTML = cuurentTime.getHours();
    minutes.innerHTML = cuurentTime.getMinutes();
    seconds.innerHTML = cuurentTime.getSeconds();
    days.innerHTML = cuurentTime.getDate();
    months.innerHTML = cuurentTime.getMonth() + 1;
    years.innerHTML = cuurentTime.getFullYear();
    





},1000)

