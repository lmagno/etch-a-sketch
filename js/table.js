$(document).ready(function () {
    $('body').prepend("<div class='grid'></div>");
    $('.grid').prepend("<table></table>");
    // $('table').prepend("<tbody></tbody>");

    for (var i = 0; i < 16; i++) {
        var $tr = $("<tr></tr>");
        $('table').append($tr);
        for (var j = 0; j < 16; j++) {
            $tr.append("<td><div class='square'></div></td>");
        }
    }

});
