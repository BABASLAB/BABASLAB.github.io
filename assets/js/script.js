document.querySelector("#logo").addEventListener('ready', function () {
    current_rotation += 90;
    document.querySelector("#logo").style.transform = 'rotate(' + current_rotation + 'deg)';
});