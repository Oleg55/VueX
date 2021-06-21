<template>
    <div class="Todo">
        <h1>Your actions</h1>
        <app-action 
            v-for="(action,i) in todoList"
            v-bind:title="action.title"
            v-bind:current="action.current"
            v-bind:max="action.max"
            v-bind:key="i"
            v-on:step="onNext(i)"
            ></app-action>
    </div>
</template>
<script>
import AppAction from '@/components/Action.vue'

export default {
    components: {
        AppAction
    },  
    data: () => ({

        todoList: [
            { title: 'First action', current: 1, max: 5 },
            { title: 'Other work', current: 2, max: 10 },
            { title: 'Some fun', current: 4, max: 7 }
        ]
    }),
    methods: {
        onNext(i){
            this.todoList[i].current++;
        },

    }
	
}
</script>