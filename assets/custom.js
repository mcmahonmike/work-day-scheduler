
var currentDate = moment().format("MMMM Do, YYYY - hh:mm:ss a");
var hour = $(".description")




var Time = function(){
    // creating variable for the current hour
    var currentTime = moment().hour()
    // looping through each time block and accessing ids
    $(".time-block").each(function(){
    var timeChecker = ($(this).attr("id").split("hour")[1]);
    var onHour = $(this).attr("id");
    $("#" + onHour + ".description").val(localStorage.getItem(onHour));
    // if statement to add class styles to timeblocks
    if (currentTime < timeChecker){
        $(this).addClass("future")
    }else if (currentTime == timeChecker) {
        $(this).addClass("present")
    }else{
        $(this).addClass("past")
    }
    // display current date and time
    $("#currentDay").text(currentDate);

})
}

var saveInput = function(){
    $(".saveBtn").on("click", function(){
        var textInput = $(this)
        .siblings(".description")
        .val();
        var hour = $(this)
        .parent()
        .attr("id")
        localStorage.setItem(textInput, hour)
    })
}



saveInput()
Time()



 

