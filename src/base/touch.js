var touch = function (option) {
    var opts = $.extend({}, defaults, option);
    var element = document.querySelector(opts.container);
    var grid = { start: {}, end: {} };
    var length, loading, offset;
    var defaults = {
        container: "",
        preHeight: 0,
        isNeedDrop: false,
        isNeedPull: false,
    }
    function registerTouchEvent(event_name, event_fn) {
        if (element.addEventListener) {
            element.addEventListener(event_name, event_fn, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event_name, event_fn);
        } else {
            element['on' + event_name] = event_fn;
        }
    }
    var fn = {
        translate: function (diff) {
            element.style.webkitTransform = 'translate(0,' + diff + 'px)';
            element.style.transform = 'translate(0,' + diff + 'px)';
        },
        setTransition: function (time) {
            element.style.webkitTransition = 'all ' + time + 's';
            element.style.transition = 'all ' + time + 's';
        },
        Initialization: function () {
            this.translate(0 - offset);
        },
        animation: function () {
            var htmls = '<div style="text-align: center;height: 70px;line-height: 70px;">' +
                '<img src="static/images/pull-icon.png" style="vertical-align: middle;width: 32px" />&nbsp;<span style="vertical-align: middle;"></span></div>';
            $(element).prepend(htmls)
            loading = element.firstElementChild;
            offset = loading.clientHeight;
        }
    }

    function touchstart(event) {
        if (element.scrollTop <= 0) {
            var touch = event.targetTouches[0];
            grid.start = { x: touch.pageX, y: touch.pageY };
            fn.setTransition(0);
            loading.querySelector("span").innerText = '下拉刷新...';
            registerTouchEvent('touchmove', touchmove);
            registerTouchEvent('touchend', touchend);
        }
        return false;
    }
    function touchmove(event) {
        if (element.scrollTop <= 0) {
            var touch = event.targetTouches[0];
            grid.end = { x: touch.pageX, y: touch.pageY };
            if (grid.start.y < grid.end.y) {
                event.preventDefault();
                if ((grid.end.y - grid.start.y - offset) / 2 <= 80) {
                    length = (grid.end.y - grid.start.y - offset) / 2;
                    fn.translate(length);
                }
                else {
                    length += 0.3;
                    fn.translate(length);
                    loading.querySelector("span").innerText = '松开刷新...';
                }
            }
        }
    }
    function touchend(event) {
        if (grid.end.y - grid.start.y >= offset) {
            fn.setTransition(2);
            loading.querySelector("span").innerText = '更新中...';
            if (typeof opts.dropCallBack == "function") {
                opts.dropCallBack(fn);
            }
        } else {
            //返回初始状态
            fn.Initialization();
        }
        element.removeEventListener("touchmove", touchmove, false);
        element.removeEventListener("touchend", touchend, false);
    }
    function scroll() {
        var wScrollY = element.scrollTop;
        var wInnerH = element.offsetHeight;
        var bScrollH = element.scrollHeight;
        if (wScrollY + wInnerH + opts.preHeight >= bScrollH) {
            if (typeof opts.pullCallBack == "function") {
                opts.pullCallBack();
            }
        }
    }
    function init() {
        fn.animation();
        if (opts.isNeedDrop) {
            registerTouchEvent('touchstart', touchstart);
        }
        if (opts.isNeedPull) {
            registerTouchEvent('scroll', scroll);
        }
        fn.translate(0 - offset);
    }
    init();
}
module.exports = touch;
