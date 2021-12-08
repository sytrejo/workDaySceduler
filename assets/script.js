// //This will display the date and time at the top.
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentTime = moment();
currentTime = currentTime.startOf('hour');
var beforeTime = moment().startOf('day').add(9, 'hours');

// // This will save to the local storage
function saveData(){
    localStorage.saveServer
    console.log('This happened')
}

//to change the color of each block...I can't figure out what I am doing wrong...

// $(init);

// function init(){
//     $("#currentDay").text(moment().format("dddd, MMMM Do"));
//     colorTimeblocks();
//     setInterval(colorTimeblocks, 60000);
//     $(".time-block").each(function(){
//         var blockId = $(this).attr("id");
//         $("#" + blockId + "textarea").text(localStorage.getItem(moment().format("DDDYYYY")+ blockId));
//         $(".saveBtn").on("click", handleSave);
//     })
// }

// function colorTimeblocks(){
//     $('.time-block').each(function(){
//         var blockHour = parseInt($(thi).attr("id").replace("hour",""));
//         var currentHour = parseInt(moment().format("H"));
//         $(this).removeClass("past present future");
//         if(blockHour < currentHour){
//             $(this).addClass("past");
//         } else if (blockHour > currentHour){
//             $(this).addClass("future");
//         } esle {
//             $(this).addClass("present");
//         }
//     })
// }