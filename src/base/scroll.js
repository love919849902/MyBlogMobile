var scroll = function (option) {
    var opts = option;
    var element = document.querySelector(".container");
    function init() {
        var handler = function (event) {
            var wScrollY = element.scrollTop;
            var wInnerH = element.offsetHeight;
            var bScrollH = element.scrollHeight;
            if (wScrollY + wInnerH + opts.preHeight >= bScrollH) {
                opts.callback();
            }
        }
        if (element.addEventListener) {
            element.addEventListener('scroll', handler);
        } else if (element.attachEvent) {
            element.attachEvent('onscroll', handler);
        } else {
            element['onscroll'] = handler;
        }
    }
    init();
}
module.exports = scroll;