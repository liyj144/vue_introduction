var fiveVM1 = new Vue({
	el: '#example-51',
	components: { // 局部注册组件
		child: {
			props: ['msg'],
			template: '<span>{{ msg }}</span>'
		}
	}
});

var fiveVM2 = new Vue({
	el: '#example-52',
	data: {
		parentMsg: "good boy"
	},
	components: {
		child2: {
			props: ['myMessage'],
			template: '<input value="{{ myMessage }}" />'
		},
		child3: {
			props: ['myMessage'],
			template: '<input value="{{ myMessage }}" />'
		},
		child4: {
			props: ['myMessage'],
			template: '<input value="{{ myMessage }}" />'
		}
	}
});

var Form = Vue.extend({
	props: {
		username: {
			type: String,
			default: "unkonwn"
		}
	},
	data: function(){
		return {
			input: '',
			isDone: false
		};
	},
	computed: {
		isDone: function(){
			return /^\d+$/.test(this.input) ? true : false;
		}
	},
	template: `
		<h1>{{username}}'s Todo List  </h1>
		<form v-on:submit.prevent="add">
			<input type="text" v-model="input">
			<input type="submit" value="add">
		</form>
	`,
	methods: {
		add: function(){ // 定义 add 消息
			this.$dispatch("add", this.input, this.isDone);
			this.input = '';
			this.isDone = false;
		}
	}
});
var List = Vue.extend({
	template: `
		<ul>
			<li v-for="todo in list">
				<label :class="{done: todo.done}">
					<input type="checkbox" v-model="todo.done" />
					{{todo.title}}
				</label>
			</li>
		</ul>
	`,
	props: {
		initList: {
			type: Array
		}
	},
	data: function(){
		return {
			list: []
		}
	},
	events: {
		add: function(input, isDone){  // 监听add 消息
			if(!input)return false;
			this.list.unshift({
				title: input,
				done: isDone
			})
		}
	}
});


var fiveVM3 = new Vue({
	el: '#example-53',
	components: {
		"example53-form": Form,
		"example53-list": List
	},
	events: {
		add: function(input, isDone){
			this.$broadcast("add", input, isDone); // 提交时，子组件的数据广播到父组件
		}
	}
});
/*
	1. fiveVM2.$data.parentMsg = "hello"
	2. 直接改子组件的值，看父组件是否变化
*/