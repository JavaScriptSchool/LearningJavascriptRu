//http://4brain.ru/skorochtenie/trenirovka-vnimanija.php
var a  = [];
while ( $('.braingame_game_askblock').length ) {
    a.push($('.braingame_game_askblock').text());
    var tries = Number.parseInt($('#braingame_game_block').find('b').text());
    if (tries > a.length) {
        $('#checkerfalse').trigger('click');
    } else {
        if ($('.braingame_game_askblock').text() === a[a.length-1-tries]) {
            $('#checkertrue').trigger('click');
        } else {
            $('#checkerfalse').trigger('click');
        }
    }
}