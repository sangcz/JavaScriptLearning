var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e);
    container.innerHTML = count++;
};

// container.onmousemove = getUserAction;

function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}

container.onmousemove = debounce(getUserAction, 1000);