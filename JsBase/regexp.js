// 手机号正则
var phoneReg = /^1[3|4|5|7|8|]{1}[0-9]{9}$/;

phoneReg.test('18756020979');


// 邮箱正则表达式

var emailReg = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$/
emailReg.test('a.b.c@qq.com')
emailReg.test('2643697273@qq.com')


// url 解析参数

var url = 'https://wwww.sangcz.com?id=123&name=Joy&age=23';

function getParmes(arg) {
    var arr = arg.split('?')[1]
    var urlObj = {}
    urlObj.id = arr.split('id=')[1].split('&')[0]
    urlObj.name = arr.split('name=')[1].split('&')[0]
    urlObj.age = arr.split('age=')[1].split('&')[0]
    console.log(urlObj);
    return urlObj
}
getParmes(url)

function IsEmail(str) {
    var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    console.log(reg.test(str));
}
IsEmail('sangchaozhong@qq.com')

