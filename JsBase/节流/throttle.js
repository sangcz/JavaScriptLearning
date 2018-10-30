var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e);
    container.innerHTML = count++;
};

function throttle(func, wait) {
    var context, args;
    var previous = 0;

    return function () {
        var now = +new Date();
        console.log(now)
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}

container.onmousemove = throttle(getUserAction, 1000);