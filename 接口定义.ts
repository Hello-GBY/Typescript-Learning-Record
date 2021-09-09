// 接口：可选属性
interface obj {
  name: string,
  value?: number
}

function setObj(val: obj) {

}
// 参数的顺序可以不一样
setObj({
  name:'XiXi',
  value: 123
});

// 参数的可传可不传
setObj({
  name:'XiXi'
});
