
Vue.transition('justtest', {
	beforeEnter: function (el) {
      el.textContent = 'beforeEnter'
  	},
	enter: function (el) {
		el.textContent = 'enter'
	},
	afterEnter: function (el) {
		el.textContent = 'afterEnter'
	},
	enterCancelled: function (el) {
		// handle cancellation
	},

	beforeLeave: function (el) {
		el.textContent = 'beforeLeave'
	},
	leave: function (el) {
		el.textContent = 'leave'
	},
	afterLeave: function (el) {
		el.textContent = 'afterLeave'
	},
	leaveCancelled: function (el) {
		// handle cancellation
	}
});
Vue.transition('expand', {
	enterClass: 'ex_in',
	leaveClass: 'ex_out'
});
new Vue({
	el: "#example-6",
	data: {
		msg: 'hello',
		show: true,
		transitionName: 'justtest'
	}
});

// js 动画
Vue.transition('fade', {
	css: false,
	enter: function(el, done){
		$(el)
      		.css('opacity', 0)
      		.animate({ opacity: 1 }, 1000, done);
	},
	enterCancelled: function(el){
		$(el).stop();
	},
	leave: function(el, done){
		$(el).animate({ opacity: 0 }, 1000, done);
	},
	leaveCancelled: function(el){
		$(el).stop();
	}
})