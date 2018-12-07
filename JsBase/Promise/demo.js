let fs = require('fs');

function readFile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, {encoding: "utf-8"}, function (err, contents) {
            if (err) {
                reject(err);
                return;
            }

            // 成功读取
            resolve(contents);
        });
    });
}

let promise = readFile('./Promise基础知识.html');

promise.then(function (contents) {
    // 完成
    console.log(contents)
}, function (err) {
    // 拒绝
    console.log(err.message);
});