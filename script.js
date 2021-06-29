$(document).ready(function () {


var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    console.log("clicky click")
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    console.log(value);
    console.log(time);
})

console.log(moment().format(`dddd, MMMM Do`));








































})