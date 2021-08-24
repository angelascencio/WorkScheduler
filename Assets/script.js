var liveTime = document.querySelector(".current-time");

var timer = setInterval(function(){
var currentTime = moment().format("dddd, MMM Do, YYYY, hh:mm:ss");
liveTime.textContent = currentTime;
}, 1000);

var saveButton = $(".saveButton");

var text_hour7 = $("hour7");

var text_hour8 = $("hour8");

var text_hour9 = $("hour9");

var text_hour10 = $("hour10");

var text_hour11 = $("hour11");

var text_hour12 = $("hour12");

var text_hour1 = $("hour1");

var text_hour2 = $("hour2");

var text_hour3 = $("hour3");

var text_hour4 = $("hour4");

var text_hour5 = $("hour5");

var text_hour6 = $("hour6");


saveButton.on("click", function(){
    localStorage.setItem("7am", (text_hour7.val()));
    localStorage.setItem("8am", (text_hour8.val()));
    localStorage.setItem("9am", (text_hour9.val()));
    localStorage.setItem("10am", (text_hour10.val()));
    localStorage.setItem("11am", (text_hour11.val()));
    localStorage.setItem("12pm", (text_hour12.val()));
    localStorage.setItem("1pm", (text_hour1.val()));
    localStorage.setItem("2pm", (text_hour2.val()));
    localStorage.setItem("3pm", (text_hour3.val()));
    localStorage.setItem("4pm", (text_hour4.val()));
    localStorage.setItem("5pm", (text_hour5.val()));
    localStorage.setItem("6pm", (text_hour6.val()));
})

$("#hour-7").append(localStorage.getItem("7am"));
$("#hour-8").append(localStorage.getItem("8am"));
$("#hour-9").append(localStorage.getItem("9am"));
$("#hour-10").append(localStorage.getItem("10am"));
$("#hour-11").append(localStorage.getItem("11am"));
$("#hour-12").append(localStorage.getItem("12pm"));
$("#hour-1").append(localStorage.getItem("1pm"));
$("#hour-2").append(localStorage.getItem("2pm"));
$("#hour-3").append(localStorage.getItem("3pm"));
$("#hour-4").append(localStorage.getItem("4pm"));
$("#hour-5").append(localStorage.getItem("5pm"));
$("#hour-6").append(localStorage.getItem("6pm"));
