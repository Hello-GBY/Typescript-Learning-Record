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


// 封装 ajax
// 设置接口
interface config {
  url: string, 
  methods: string, 
  body:string,
  headers: string
}

function ajax (config: config){
  let {url, methods, body, headers} = {...config}
  // let xml = new XMLHttpRequest();
}

console.log('asdf')
alert(1);

