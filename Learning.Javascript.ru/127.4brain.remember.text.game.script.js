//http://4brain.ru/skorochtenie/filtr-informacii.php
if ($('#testing_text').length) {
    var text = $('#testing_text').text();
    $('.nextbutton').trigger('click');
    var units = $('#testing_form').find('[id*=braingamestring]');
    var index = 0;
    while (index !== text.length-1) {
        units.each(function (ind, unit) {
            if (text.indexOf(unit.text) === index) {
                unit.trigger('click');
                index = index + unit.text().length;
            }
        })
    }
}