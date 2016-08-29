$(document).ready(function () {
    $('body').append("<div class='grid'></div>");

    resetSimple();
});


function resetSimple() {
    size = $('#nOfSquares').val();

    deleteGrid();
    createGrid(size);

    $('.square').hover(hoverSimple);
}

function resetRandom() {
    size = $('#nOfSquares').val();

    deleteGrid();
    createGrid(size);

    $('.square').hover(hoverRandom);
}

function resetHeatMap() {
    size = $('#nOfSquares').val();

    deleteGrid();
    createGrid(size);

    $('.square').hover(hoverHeatMap);
}

function resetGradient() {
    size = $('#nOfSquares').val();

    deleteGrid();
    createGrid(size);

    gradHue = Math.floor(Math.random()*360);
    $('.square').hover(hoverGradient);
}

function createGrid(size) {
    for (var i = 0; i < size; i++) {
        var $row = $("<div class='row'></div>");
        $('.grid').append($row);

        for (var j = 0; j < size; j++) {
            $row.append("<div class='square'></div>");
        }
    }

}

function deleteGrid() {
    $('.grid').empty();
}

function hoverSimple() {
    $(this).addClass('hover');
}

function randomHue() {
    return Math.floor((Math.random()*360));
}

function hoverRandom() {
    $(this).css('background-color', 'hsl(' + randomHue()+ ', 90%, 60%)');
}

function hoverHeatMap() {
    var color = jQuery.Color($(this), 'background-color');
    var hue = color.hue();
    var sat = color.saturation();

    if(sat == 0) {
        $(this).css('background-color', 'hsl(230, 90%, 60%)');
    } else {
        hue = hue < 18 ? 0 : hue-18;
        var newColor = color.hue(hue);
        $(this).css('background-color', newColor);
    }
}

function hoverGradient() {
    gradHue = (gradHue - 1)%360;

    $(this).css('background-color', 'hsl(' + gradHue + ',90%, 60%)');
}
