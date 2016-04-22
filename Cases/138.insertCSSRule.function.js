var sheet = (function () {
    // Создаём элемент <style>
    var style = document.createElement('style');

    // Если хотите, то добавляем атрибут `media` (и/или медиа-выражения)
    // style.setAttribute('media', 'screen')
    // style.setAttribute('media', 'only screen and (max-width : 1024px)')

    // Хак для WebKit :(
    style.appendChild(document.createTextNode(''));

    // Добавляем на страницу элемент <style>
    document.head.appendChild(style);

    return style.sheet;
})();

sheet.insertRule('header {float:left; opacity: 0.8;}', 1)