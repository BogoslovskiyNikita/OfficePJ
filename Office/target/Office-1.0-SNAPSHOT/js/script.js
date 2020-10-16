var maxCount = 400;
var redCount = 3;
var input = document.getElementById("#taskDescription");
$("#count").text(maxCount);

function getCount() {
    var count = maxCount - $("#taskDescription").val().length;
    $("#count").text(count);
    if (count <= redCount) {
        $(".inform-text").addClass("red");
    } else if (count > 0 && $(".inform-text").hasClass("red")) {
        $(".inform-text").removeClass("red");
        $("#submit-button").removeClass("disabled");
    }
    if (count <= 0) {
        input.setAttribute("maxLength", "400");
        $("#submit-button").addClass("disabled");
        $("#submit-button").text("Недоступно");
    } else if (count > 0 && $("#submit-button").hasClass("disabled")) {
        $("#submit-button").removeClass("disabled");
        $("#submit-button").text("Отправить");
    }
}