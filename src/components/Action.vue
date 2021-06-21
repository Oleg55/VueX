<template>
    <div class="action">
        <div class="alert" :class="alertClass">
            <h2>{{ title }}</h2>
            <div class="progress">
                <div :style="progressStyles" class="progress-bar"></div>
            </div>
            <hr>
            <h3 v-if="false">All done!</h3>
            <button v-else type="button" class="btn btn-primary" @click="btnClicked">
                I make step!
            </button>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['title','current','max'],
        computed: {
				rel() {
					return this.current / this.max;
				},
				alertClass() {
					return {
						'alert-danger': this.rel < 0.25,
						'alert-warning': this.rel >= 0.25 && this.rel < 0.75,
						'alert-success': this.rel >= 0.75
					}
				},
				progressStyles() {
					return {width: (this.rel * 100) + '%'}
				}
        },
        methods: {
				btnClicked() {
					if(this.current < this.max){
						this.$emit('step');
					}
					

				}
        }
    }
</script>