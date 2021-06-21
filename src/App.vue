<template>
<div>
	<app-header></app-header>
	<app-content></app-content>
</div>
</template>

<script>
	import AppContent from './components/Content';
	import AppHeader from './components/Header';

	export default {
		components: {
			AppContent,
			AppHeader
		},
		data(){
			return {
				price: 1000,
				cnt: 1
			}
		},
		methods: {
			onDescrease(){
				if(this.cnt > 1){
					this.cnt--;
				}
			}
		}
	}
</script>