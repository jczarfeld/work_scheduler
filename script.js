var timeDisplayEl = $('#time-display');
var projectsList = { "9":  [],"10": [],"11": [],"12": [],"13": [],"14": [],"15": [],"16": [],"17": []
};





function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }


$(document).ready(function () {


var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
  
    
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(value);
    localStorage.setItem(time);
})




   
})

console.log(moment().format(`dddd, MMMM Do`));

setInterval(displayTime, 1000);







































