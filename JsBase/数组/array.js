/*
* 原生 api
* concat 浅复制，返回新数组 例如 var a = [1,2,3]; var b = [4,5,6]; a.concat(b); 返回 [1, 2, 3, 4, 5, 6]
* join 转换成字符串，默认，分隔 例如 var a = [1,2,3]; a.join('|'); 返回 "1|2|3"
* push 向数组末尾添加元素， 返回新长度 例如 var a = [1,2,3]; a.push(4); 返回 4
* pop 移除数组最后一个元素，返回该元素 例如 var a = [1,2,3]; a.pop(); 返回 3
* reverse 反转数组元素的顺序，返回当前数组 例如 var a = [1,2,3]; a.reverse() 返回 [3,2,1]
* shift 移除数组第一个元素，返回该元素 例如 var a = [1,2,3]; a.shift(); 返回 1
* slice 浅复制 例如 var a = [1,2,3]; a.slice(0,1); 返回 [1]
* splice 移除元素，返回被移除元素的数组  例如 var a = [1,2,3]; a.splice(0,1); 返回 [1]
* unshift 和push一样将元素加到数组中，插入在开始部分，返回新长度 例如 var a = [1,2,3]; a.unshift(0); 返回 4
* */

// 经典数组面试题

// 数组[1,2,3]和[2,3,6,4,5]合并去重并随机打乱

var a = [1,2,3];
var b = [2,3,6,4,5];

var c = a.concat(b);

let set = new Set(c);
let d = [...set]; // Array.from(new Set([2,3,3,6,4,4,5]))

function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
    // 用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}
d.sort(randomsort);
console.log(d);

// 数组打平
/*function flatten (arr) {
    for (let i in arr) {
        if (Array.isArray(arr[i])) {
            arr.splice(i, 1, ...flatten(arr[i]))
        }
    }
    return arr
}

var arr = [1, [2, [3], 4], 5];

flatten(arr);
console.log(arr);*/

// 寻找两个有序数组最小相同元素
/*const a = [1, 2, 5, 9, 10]
const b = [3, 4, 6, 9, 10]

function findElement (a, b) {
    let i = j = 0;
    while (i < a.length || j < b.length) {
        if (a[i] === b[j]) {
            return a[i]
        } else if (a[i] > b[j]) {
            j ++
        } else if (a[i] < b[j]) {
            i ++
        }
    }
    return null
}

console.log(findElement(a, b))*/
