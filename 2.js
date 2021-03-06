// 定义一个可复用的组件类
var MyComponent = Vue.extend({
	template: '<p>{{msg}}</p>',
	props: ['msg']
});
// 全局注册该组件
Vue.component('my-component', MyComponent);

new Vue({
	el: '#example-21'
});

var data = {
	name: 'My Tree',
  	children: [
	    { name: 'hello' },
	    { name: 'wat' },
	    {
	      name: 'child folder',
	      children: [
	        {
	          name: 'child folder',
	          children: [
	            { name: 'hello' },
	            { name: 'wat' }
	          ]
	        },
	        { name: 'hello' },
	        { name: 'wat' },
	        {
	          name: 'child folder',
	          children: [
	            { name: 'hello' },
	            { name: 'wat' }
	          ]
	        }
	      ]
	    }
	]
};
Vue.component('item', {
	template: '#item-template',
	props: {
		model: Object
	},
	data: function(){
		return {
			open: false
		}
	},
	computed: {
		isFolder: function(){
			return this.model.children && this.model.children.length
		}
	},
	methods: {
		toggle: function(){
			this.isFolder && (this.open = !this.open);
		},
		changeType: function(){
			if(!this.isFolder){
				Vue.set(this.model, 'children', []);
				this.addChild();
				this.open = true;
			}else{
				Vue.delete(this.model, 'children');
			}
		},
		addChild: function(){
			this.model.children.push({
				name: 'new stuff'
			})
		}
	}
});
var demo = new Vue({
	el: '#example-22',
	data: {
		treeData: data
	}
});