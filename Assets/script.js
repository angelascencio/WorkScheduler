var liveTime = document.querySelector(".current-time");

var timer = setInterval(function(){
var currentTime = moment().format("dddd, MMM Do, YYYY, hh:mm:ss");
liveTime.textContent = currentTime;
}, 1000);



