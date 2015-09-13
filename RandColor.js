// JavaScript source code

$(document).ready(function () {
    newColor = getColor();
    $("ul li h1").css("background-color", newColor);
    $("ul li h1").text("Current Color: " + newColor);


    $("#changeColor").click(function () {
        newColor = getColor();
        oldColor = rgb2hex($("h1").css('backgroundColor'));
        oldColor = oldColor.toUpperCase();
        newli = $("li:nth-child(1)").after("<li class='newli' style='background-color:"+oldColor+"'>" + oldColor + "</li>");
        $("ul li h1").css("background-color", newColor);
        $("h1").text("Current Color: " + newColor);
        $("body").css('background-color','white')

    });

    $('ul').on('click', '.newli', function () {
        oldColor = $(this).text();
        $('body').css("backgroundColor", oldColor);
        $("ul li h1").css("background-color", oldColor);
        $("h1").text("Current Color: " + oldColor);
    });




});


function getColor() {
    var newColorText = "#";
    var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    for (i = 0; i < 6; i++)   {
        newColorText = newColorText + hex[Math.floor(Math.random() * 16)];
    }

   
    return newColorText;
}


//Function to convert hex format to a rgb color
function rgb2hex(orig) {
    var rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;
}
