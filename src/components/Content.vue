<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
					<app-product></app-product>
				</div>
			</div>
			<hr>
			<button type="button" @click="sendOrder">Send</button>
			<hr>
			<div class="alert" :class="alertClasses" v-if="showAlert">
				{{ alertText }}
			</div>
		</div>
	</section>
</template>

<script>
	import AppProduct from './Product';
	import { mapGetters, mapActions } from 'vuex';

	export default {
		components: {
			AppProduct
		},
		computed: {
			...mapGetters(['status']),
			showAlert(){
				return this.status !== 'none';
			},
			alertText(){
				return this.status === 'pending' ? 'Loading' : 'Your order is done!';
			},
			alertClasses(){
				return {
					'alert-warning': this.status === 'pending',
					'alert-success': this.status === 'done'
				}
			}
		},
		methods: {
			...mapActions(['sendOrder'])
		}
	}
</script>