
var currentDate = moment().format("MMMM Do, YYYY - hh:mm:ss a");
var currentTime = moment().format('H')
var hour = $(".description")

var Time = function(){
$("#currentDay").text(currentDate)
}

Time()

$(hour).addClass('past')

 

