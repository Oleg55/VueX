<template>
	<div>
		<h2>Product title</h2>
		<div class="price">{{ price }}</div>
		<hr>
		<button class="btn btn-warning" @click="sendDecrease">-1</button>
		<input type="text" :value="cnt" @change="onInput">
		<button class="btn btn-success" @click="sendIncrease">+1</button>
	</div>
</template>
<script>
	import { mapGetters, mapMutations, mapActions } from 'vuex';

	export default {
		computed: mapGetters(['price', 'cnt']),
		methods: {
			...mapMutations(['decrease', 'increase', 'setCnt']),
			onInput(e){
				const _this = this;
				let InpValue = e.target.value;
				console.log(InpValue);
				const promise1 = new Promise(function(resolve, reject) {
						resolve(InpValue);

				});

				promise1.then(function(result) {
					if(isNaN(InpValue)){
							e.target.value = _this.cnt;
					}
						return _this.sendSetCnt(result);
				});
			//console.log(e.target.value = this.cnt);

			},
			...mapActions(['sendIncrease','sendDecrease','sendSetCnt'])
			
		},

		/*
			{
				decrease(){
					return this.$store.commit('decrease')
				},
				increase(){
					return this.$store.commit('increase')
				}
			}
		*/
	}

	/*
		let a = { a: 1 }
		let b = { b: 2 }
		let c = { ...a, ...b, c: 3 };
	*/
</script>