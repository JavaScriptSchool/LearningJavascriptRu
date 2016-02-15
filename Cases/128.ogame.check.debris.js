function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

var $currentSystemInput = $('#system_input'),
    $nextGalaxyButton = $('.galaxy_icons.next').eq(1),
    startValue = Number.parseInt($currentSystemInput.val()),
    df = [];

do {
    var $debris = $('.ago_galaxy_debris'),
        currentGalaxy = Number.parseInt($currentSystemInput.val());
    if ($debris.length) {
        $debris.each(function(index, deb) {
            var sum = $(deb)
                .find('span')
                .html()
                .split('<br>')
                .reduce(function (met, cryst) {
                    return (
                        (met.split(' ')[1] === 'K' ? Number.parseInt(met.split(' ')[0]) * 1000 : Number.parseInt(met.split(' ')[0]))
                        +
                        (cryst.split(' ')[1] === 'K' ? Number.parseInt(cryst.split(' ')[0]) * 1000 : Number.parseInt(cryst.split(' ')[0]))
                    )
                }),
                position = Number.parseInt($(deb).closest('tr').find('.position').text()),
                obj = {
                    galaxy: currentGalaxy,
                    position: position,
                    sum: sum
                };
            console.log(obj);
            df.push(obj);
        });
    }
    sleep(2000);
    $nextGalaxyButton.click();
    currentGalaxy = Number.parseInt($currentSystemInput.val());
    console.log(currentGalaxy);
} while (currentGalaxy !== startValue);
//console.log(df);

