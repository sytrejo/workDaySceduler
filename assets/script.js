// //This will display the date and time at the top.
var currentTime = moment();
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
currentTime = currentTime.startOf('hour');
var beforeTime = moment().startOf('day').add(9, 'hours');
var schedule9 = document.getElementById("9")
var schedule10 = document.getElementById("10")
var schedule11 = document.getElementById("11")
var schedule12 = document.getElementById("12")
var schedule13 = document.getElementById("13")
var schedule14 = document.getElementById("14")
var schedule15 = document.getElementById("15")
var schedule16 = document.getElementById ("16")

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
    var newAppointment13 = schedule13.value
    localStorage.setItem("One", newAppointment1)
    console.log("it works!")
    console.log(localStorage.getItem("One"))
});

$(".Btn2").click(function (){
    console.log(schedule14.value);
    var newAppointment14 = schedule14.value
    localStorage.setItem("Two", newAppointment2)
    console.log("it works!")
    console.log(localStorage.getItem("Two"))
});

$(".Btn3").click(function (){
    console.log(schedule15.value);
    var newAppointment15 = schedule15.value
    localStorage.setItem("Three", newAppointment3)
    console.log("it works!")
    console.log(localStorage.getItem("Three"))
});

$(".Btn4").click(function (){
    console.log(schedule16.value);
    var newAppointment16 = schedule16.value
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
    schedule13.innerHTML = localStorage.getItem("One");
    schedule14.innerHTML = localStorage.getItem("Two");
    schedule15.innerHTML = localStorage.getItem("Three");
    schedule16.innerHTML = localStorage.getItem("Four")
}

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
        schedule13.style.background =  "orange"
    }  else if(currentTime >= 2 && currentTime < 3){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "grey"
        schedule13.style.background =  "grey"
        schedule14.style.background = "orange"
    } else if(currentTime >= 3 && currentTime < 4){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "grey"
        schedule13.style.background =  "grey"
        schedule14.style.background = "grey"
        schedule15.style.background = "orange"
    } else if(currentTime >= 4 && currentTime < 5){
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "grey"
        schedule13.style.background =  "grey"
        schedule14.style.background = "grey"
        schedule15.style.background = "grey"
        schedule16.style.background = "orange"
    } else{
        schedule9.style.background = "grey"
        schedule10.style.backgound = "grey"
        schedule11.style.background = "grey"
        schedule12.style.background = "grey"
        schedule13.style.background = "grey"
        schedule14.style.background = "grey"
        schedule15.style.background = "grey"
        schedule16.style.background = "grey"
    };
}

// colorTimeblocks();
// function updateSlots(){
//     var currentTime = moment().hour()
//     for (var i = 0; i < 24; i++){
//         var slotRow = document.getElementById(i)

//         if(slotRow){
//             console.log(slotRow)
//             var slotHour = parseInt(slotRow.getAttribute("id"))
//             slotRow.style.background = "green"
//             if(currentTime === slotHour) slotRow.style.background="orange"
//             if(currentTime > slotHour) slotRow.style.background="grey"
//         }
//     }
// };

resetPage()



