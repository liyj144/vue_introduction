var indexVM3 = new Vue({
	el: '#example-3',
	data: {
		name: 'name',
		status: 'status'
	},
	methods: {
		save: function(){
			saveToDB(this.name, this.status)
		}
	}
});

function saveToDB(name, status){
	console.log("save to db, params name is " + name + ', and status is '+ status);
}