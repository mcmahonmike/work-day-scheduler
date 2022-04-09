
var currentDate = moment().format("MMMM Do, YYYY - hh:mm:ss a");
var hour = $(".description")





var Time = function(){
    var currentTime = moment().hour()
$(".time-block").each(function(){
    var timeChecker = ($(this).attr("id").split("hour")[1]);
    var onHour = $(this).attr("id");
    $("#" + onHour + ".description").val(localStorage.getItem(onHour));
})
}

Time()

$(hour).addClass('past')

 

