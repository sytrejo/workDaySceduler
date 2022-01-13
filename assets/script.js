// //This will display the date and time at the top.

$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentTime = moment();
currentTime = currentTime.startOf('hour');
var beforeTime = moment().startOf('day').add(9, 'hours');
var schedule9 = document.getElementById("9")
var schedule10 = document.getElementById("10")
var schedule11 = document.getElementById("11")
var schedule12 = document.getElementById("12")
var schedule1 = document.getElementById("1")
var schedule2 = document.getElementById("2")
var schedule3 = document.getElementById("3")
var schedule4 = document.getElementById ("4")

// // This will save to the local storage
$(".Btn9").click(function (){
    console.log(schedule9.value);
    var newAppointment9 = schedule9.value
    localStorage.setItem("Nine", newAppointment9)
    console.log("it works!")
    console.log(localStorage.getItem("Nine"))
});

$(".Btn10").click(function (){
    console.log(schedule10.value);
    var newAppointment10 = schedule10.value
    localStorage.setItem("Ten", newAppointment10)
    console.log("it works!")
    console.log(localStorage.getItem("Ten"))
});

$(".Btn11").click(function (){
    console.log(schedule11.value);
    var newAppointment11 = schedule11.value
    localStorage.setItem("Eleven", newAppointment11)
    console.log("it works!")
    console.log(localStorage.getItem("Eleven"))
});

$(".Btn12").click(function (){
    console.log(schedule12.value);
    var newAppointment12 = schedule12.value
    localStorage.setItem("Twelve", newAppointment12)
    console.log("it works!")
    console.log(localStorage.getItem("Twelve"))
});

$(".Btn1").click(function (){
    console.log(schedule1.value);
    var newAppointment1 = schedule1.value
    localStorage.setItem("One", newAppointment1)
    console.log("it works!")
    console.log(localStorage.getItem("One"))
});

$(".Btn2").click(function (){
    console.log(schedule2.value);
    var newAppointment2 = schedule2.value
    localStorage.setItem("Two", newAppointment2)
    console.log("it works!")
    console.log(localStorage.getItem("Two"))
});

$(".Btn3").click(function (){
    console.log(schedule3.value);
    var newAppointment3 = schedule3.value
    localStorage.setItem("Three", newAppointment3)
    console.log("it works!")
    console.log(localStorage.getItem("Three"))
});

$(".Btn4").click(function (){
    console.log(schedule4.value);
    var newAppointment4 = schedule4.value
    localStorage.setItem("Four", newAppointment4)
    console.log("it works!")
    console.log(localStorage.getItem("Four"))
});

//This will keep the store data on the page when it is refreshed
function resetPage(){
    schedule9.innerHTML = localStorage.getItem("Nine");
    schedule10.innerHTML = localStorage.getItem("Ten");
    schedule11.innerHTML = localStorage.getItem("Eleven");
    schedule12.innerHTML = localStorage.getItem("Twelve");
    schedule1.innerHTML = localStorage.getItem("One");
    schedule2.innerHTML = localStorage.getItem("Two");
    schedule3.innerHTML = localStorage.getItem("Three");
    schedule4.innerHTML = localStorage.getItem("Four")
}

resetPage();
//This will change the colors of the text area as time passes.
//future = green (hardcoded) present = orange   past = grey
function colorTimeblocks(){
    var currentTime = moment().hour()
    if (currentTime >= 9 && currentTime < 10){
        schedule9.style.background = "orange"
    } else if (currentTime >= 10 && currentTime < 11){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "orange"
    } else if(currentTime >= 11 && currentTime < 12){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "orange"
    } else if(currentTime >= 12 && currentTime < 1){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "orange"
    } else if(currentTime >= 1 && currentTime < 2){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "grey"
        schedule1.style.background =  "orange"
    }  else if(currentTime >= 2 && currentTime < 3){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "grey"
        schedule1.style.background =  "grey"
        schedule2.style.background = "orange"
    } else if(currentTime >= 2 && currentTime < 3){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "grey"
        schedule1.style.background =  "grey"
        schedule2.style.background = "grey"
        schedule3.style.background = "orange"
    } else if(currentTime >= 3 && currentTime < 4){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "grey"
        schedule1.style.background =  "grey"
        schedule2.style.background = "grey"
        schedule3.style.background = "grey"
        schedule4.style.background = "orange"
    } else{
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "grey"
        schedule1.style.background =  "grey"
        schedule2.style.background = "grey"
        schedule3.style.background = "grey"
        schedule4.style.background = "grey"
    };
}

colorTimeblocks();

