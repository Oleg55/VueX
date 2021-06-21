<template>
	<div>
		<h2>Product title</h2>
		<div class="price">{{ price }}</div>
		<hr>
		<button class="btn btn-warning" @click="decrease">-1</button>
		<input type="text" :value="cnt" @change="onInput">
		<button class="btn btn-success" @click="increase">+1</button>
	</div>
</template>
<script>
	import { mapGetters, mapMutations } from 'vuex';

	export default {
		computed: mapGetters(['price', 'cnt']),
		methods: {
			...mapMutations(['decrease', 'increase', 'setCnt']),
			onInput(e){
				this.setCnt(e.target.value);
				// -> this.$store.commit('setCnt', e.target.value)
				// -> store.mutations.setCnt(store.state, e.target.value)
			}
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