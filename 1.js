// model 
var indexData = {
	name: 'Vue.js'
}

//vue 实例，viewmodel， 用来连接view 和 model
var indexVM = new Vue({
	el: '#example-11', // 对应view 部分
	data: indexData // 对应 model 部分， 可通过 indexVM.$data 访问， indexVM.$data === indexData
})

// 1. 数据绑定 ( dom不会更新两次) 
/* 依赖收集机制的实现类似 Knockout，精确到每一个属性，
比脏检测效率得多，性能不受制于 watcher 的数量
*/

indexVM.name = "liyj";
indexVM.name = "World";
console.log(indexVM.$data, indexData ,indexVM.$data === indexData);
indexVM.$data.name = "qqq";
//indexData.name = "www";

 2. 通过console 直接修改 model 或者 vm 中name 的值， 页面即可变化：
 indexData.name = 'liyj'   
 indexVM.name = 'good'  
 indexVM.$set("name", "exp")   // http://cn.vuejs.org/guide/instance.html， 代理的name属性是响应的

/*
var data = {msg: 'hi'}
var vm = new Vue({  data: data})

类似于

// 直接修改原对象
data.msg = 'changed'
// DOM 会在下一帧更新

*/

var indexVM2 = new Vue({
  el: '#example-12',
  data: {
    greeting: true
  }
});
/*指令带有前缀 v-，以指示它们是 Vue.js 提供的特殊特性。它们会对绑定的目标元素添加响应式的特殊行为。
继续在控制台设置 indexVM2.greeting 为 false，你会发现 “Hello!” 消失了
*/


var indexVM3 = new Vue({
  el: '#example-13',
  data: {
  	items: [
  	  {nums: ["One", "Two"]},
  	  {nums: ["Three", "Four"]}
  	]
  }
});
Vue.transition('stagger', {
	stagger: function(index){
		console.log(index);
		return Math.min(3000, index * 500);
	}
});
/*
Vue.js 包装了被观察数组的变异方法，故它们能触发视图更新。被包装的方法有： http://cn.vuejs.org/guide/list.html
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

indexVM3.$data.items.push({nums: ["five", "six"]})
*/