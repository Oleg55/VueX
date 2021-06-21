<template>
	<div>
		<div>In cart: {{ cnt }}</div>
		<div>Total: {{ total }}</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: mapGetters(['cnt', 'total'])
		/*
			{
				cnt(){
					return this.$store.getters.cnt
				},
				total(){
					return this.$store.getters.total
				}
			}
		*/
	}
</script>