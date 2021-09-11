"use strict";
/**
 * 接口的作用：
 *  定义标准、定义一种规范 只是定义不实现，类是定义并实现
 *  关键字： implement (实现)
 *
 *
 * 接口的类型：
 *  可索引接口
 *  函数接口
 *  类类型接口
 *  属性类接口
 *  接口的扩展
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var myFunc = function (v1, v2) {
    console.log('v1, v2: ', v1, v2);
    return '';
};
var arr = ['1', '2', '3'];
console.log('arr[0]: ', arr[0]);
var obj = {
    'name': 'da',
    'age': '123'
};
var Bard = /** @class */ (function () {
    function Bard(name) {
        this.name = name;
    }
    Bard.prototype.eat = function (val) {
        return this.name + '会吃:' + val;
    };
    return Bard;
}());
// 接口扩展  接口继承  接口继承接口  extends
myFunc('haha', 'xixi');
function setObj(val) {
}
// 参数的顺序可以不一样
setObj({
    name: 'XiXi',
    value: 123
});
// 参数的可传可不传
setObj({
    name: 'XiXi'
});
function ajax(config) {
    var _a = __assign({}, config), url = _a.url, methods = _a.methods, body = _a.body, headers = _a.headers;
    // let xml = new XMLHttpRequest();
}
console.log('asdf');
// alert(1);
