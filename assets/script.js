var timeDisplayEl = $('#currentDay');
//var projectsList = { "9":  [],"10": [],"11": [],"12": [],"13": [],"14": [],"15": [],"16": [],"17": []
//};




 // Display time on top of the page 
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

// starts the function when the button is clicked

$(document).ready(function () {


    var saveBtn = $(".saveBtn");

    saveBtn.on("click", function () {


        var value = $(this).siblings(".description").val()


        // stores what was typed and in which hour block
        console.log(value);
        var time = $(this).parent().attr("id")
        localStorage.setItem(value, time);

    })
 // checks current hour in live military time
    function currentHour() {
        var hour = moment().hours();
        console.log(hour);

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("-")[1]);

            console.log(timeBlock);


// conditonal statement that compares the current time to the time of the input data


// this conditional statement should change the css classes based on the comparision to the present time
            if (timeBlock === hour) {
                $(this).addClass("present");
            } else if (timeBlock > hour) {
                $(this).removeClass("present");
                $(this).addClass("future");
            } else if (timeBlock < hour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");

            }
        })

        // Trying to remove the block after we click again
       // saveBtn.on("click", function () {
       //     console.log(target);
       //     var btnClicked = $(target);
      //      btnClicked.parent('textarea').remove();
      //    })
    }

    // these values were used above to compare against the current actual time
    currentHour();

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));





})

console.log(moment().format(`dddd, MMMM Do`));

// calls the funtion for the time on screen, the other function doesn't need a call because it happens when a button is clicked
setInterval(displayTime, 1000);