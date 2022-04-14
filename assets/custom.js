
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
// Function to store saved input to localStorage
var saveInput = function(){
    $(".saveBtn").on("click", function(){
        var textAreaValuesArray = JSON.parse( localStorage.getItem("time-blocks")) || []
        var textInput = $(this)
        .siblings(".description")
        .val();
        var hour = $(this)
        .parent()
        .attr("id")
        var localStorageObject = {
            timeId: hour,
            textValue: textInput,
        }
        textAreaValuesArray.push(localStorageObject)
        localStorage.setItem("time-blocks", JSON.stringify( textAreaValuesArray))
    })
    
}

var loadInput = function(){
var savedItemsArray = JSON.parse( localStorage.getItem("time-blocks"))
var element = savedItemsArray[0]
var Id  = element.timeId
var text = element.textValue
 $("#" + Id ).find(".description").text(text)
 console.log($("#hour9").find(".description"))
}


loadInput()
saveInput()
Time()



 

