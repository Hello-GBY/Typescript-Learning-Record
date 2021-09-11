"use strict";
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
    var xml = new XMLHttpRequest();
}
