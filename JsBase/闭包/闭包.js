/*function foo() {
    var a = 2;

    function baz() {
        console.log(a);
    }

    bar (baz);
}

function bar(fn) {
    fn();
}

foo();*/

wait('Hello closure!');

function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}





