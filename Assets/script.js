var liveTime = document.querySelector(".current-time");

var timer = setInterval(function(){

var currentTime = moment().format("dddd, MMM Do, YYYY, h:mm:ss");
liveTime.textContent = currentTime;

}, 1000);


var saveButton = $(".saveBtn");

var text_hour7 = $("#hour-7");

var text_hour8 = $("#hour-8");

var text_hour9 = $("#hour-9");

var text_hour10 = $("#hour-10");

var text_hour11 = $("#hour-11");

var text_hour12 = $("#hour-12");

var text_hour1 = $("#hour-1");

var text_hour2 = $("#hour-2");

var text_hour3 = $("#hour-3");

var text_hour4 = $("#hour-4");

var text_hour5 = $("#hour-5");

var text_hour6 = $("#hour-6");


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


var timeTable = moment().format();
console.log(timeTable);

var hour7El = $("#hour-7");
if (timeTable > 7){
    hour7El.addClass("past");
}else if (timeTable == 7){
    hour7El.addClass("present");
}else if(timeTable < 7){
    hour7El.addClass("future");
}
var hour8El = $("#hour-8");
if (timeTable > 8){
    hour8El.addClass("past");
}else if (timeTable == 8){
    hour8El.addClass("present");
}else if(timeTable < 8){
    hour8El.addClass("future");
}
var hour9El = $("#hour-9");
if (timeTable > 9){
    hour9El.addClass("past");
}else if (timeTable == 9){
    hour9El.addClass("present");
}else if(timeTable < 9){
    hour9El.addClass("future");
}
var hour10El = $("#hour-10");
if (timeTable > 10){
    hour10El.addClass("past");
}else if (timeTable == 10){
    hour10El.addClass("present");
}else if(timeTable < 10){
    hour10El.addClass("future");
}
var hour11El = $("#hour-11");
if (timeTable > 11){
    hour11El.addClass("past");
}else if (timeTable == 11){
    hour11El.addClass("present");
}else if(timeTable < 11){
    hour11El.addClass("future");
}
var hour12El = $("#hour-12");
if (timeTable > 12){
    hour12El.addClass("past");
}else if (timeTable == 12){
    hour12El.addClass("present");
}else if(timeTable < 12){
    hour12El.addClass("future");
}
var hour1El = $("#hour-1");
if (timeTable > 13){
    hour1El.addClass("past");
}else if (timeTable == 13){
    hour1El.addClass("present");
}else if(timeTable < 13){
    hour1El.addClass("future");
}
var hour2El = $("#hour-2");
if (timeTable > 14){
    hour2El.addClass("past");
}else if (timeTable == 14){
    hour2El.addClass("present");
}else if(timeTable < 14){
    hour2El.addClass("future");
}
var hour3El = $("#hour-3");
if (timeTable > 15){
    hour3El.addClass("past");
}else if (timeTable == 15){
    hour3El.addClass("present");
}else if(timeTable < 15){
    hour3El.addClass("future");
}
var hour4El = $("#hour-4");
if (timeTable > 16){
    hour4El.addClass("past");
}else if (timeTable == 16){
    hour4El.addClass("present");
}else if(timeTable < 16){
    hour4El.addClass("future");
}
var hour5El = $("#hour-5");
if (timeTable > 17){
    hour5El.addClass("past");
}else if (timeTable == 17){
    hour5El.addClass("present");
}else if(timeTable < 17){
    hour5El.addClass("future");
}
var hour6El = $("#hour-6");
if (timeTable> 18){
    hour6El.addClass("past");
}else if (timeTable == 18){
    hour6El.addClass("present");
}else if(timeTable < 18){
    hour6El.addClass("future");
}