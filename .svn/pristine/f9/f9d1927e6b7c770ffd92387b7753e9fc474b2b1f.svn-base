/*
directive 中可以访问：
el: 指令绑定的元素。
vm: 拥有该指令的上下文 ViewModel。
expression: 指令的表达式，不包括参数和过滤器。
arg: 指令的参数。
name: 指令的名字，不包含前缀。
modifiers: 一个对象，包含指令的修饰符。
descriptor: 一个对象，包含指令的解析结果。
*/
Vue.directive("minlength", {
	bind: function(){
		var self = this;
		var el = this.el;
		el.addEventListener('keydown', function(e){
			if(e.keyCode === 13){
				if(el.value.length < self.minlength){
					e.preventDefault();
				}
			}
		});
		var submit = el.parentNode.querySelector("input[type='submit']");
		submit.disabled = true;
		el.addEventListener('keyup', function(e){
			submit.disabled = (el.value.length < self.minlength);
		})
	},
	update: function(value){
		this.minlength = parseInt(value);
	},
	unbind: function(){

	}
});
new Vue({
	el: '#example-6'
})