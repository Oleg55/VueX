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
				let InpValue = e.target.value;
				console.log(InpValue);
				var keepsHisWord;
				keepsHisWord = this.sendSetCnt(InpValue);
				var promise1 = new Promise(function(resolve, reject) {
					// console.log(keepsHisWord);
					if (keepsHisWord) {
						resolve(InpValue);
					} else {
						reject("The man doesnt want to keep his word");
					}
				});
				console.log(promise1);
				// this.setCnt(e.target.value);
				//console.log(this.sendSetCnt(e.target.value));

				// const sendS = this.sendSetCnt(e.target.value);
				// var promise = new Promise(function(resolve, reject) {
				// 	console.log(sendS);
				// 	 resolve(sendS);
				// });
				// promise
				// 	.then(
				// 		result => {
				// 			// первая функция-обработчик - запустится при вызове resolve
				// 			console.log("Fulfilled: " + sendS); // result - аргумент resolve
				// 		},
				// 		error => {
				// 			// вторая функция - запустится при вызове reject
				// 			console.log("Rejected: " + error); // error - аргумент reject
				// 		}
				// 	);
					
				// -> this.$store.commit('setCnt', e.target.value)
				// -> store.mutations.setCnt(store.state, e.target.value)
			},
			...mapActions(['sendIncrease','sendDecrease','sendSetCnt'])
		}
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