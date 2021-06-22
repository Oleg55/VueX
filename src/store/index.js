import { createStore } from 'vuex'

export default createStore({
	state: {
		cnt: 1,
		price: 1000,
		status: 'none'
	},
	getters: {
		cnt: state => state.cnt,
		price: state => state.price,
		status: state => state.status,
		total(state){
			return state.cnt * state.price;
		}
	},
	mutations: {
		increase(state){
			state.cnt++;
		},
		decrease(state){
			if(state.cnt > 1){
				state.cnt--;
			}
		},
		setCnt(state, payload){
			let cnt = parseInt(payload.cnt);
			if(isNaN(cnt) || cnt < 1){
				cnt = 1;
			}
			console.log('AALL');
			state.cnt = cnt;
		},
		setStatus(state, status){
			state.status = status;
		}
	},
	actions: {
		sendOrder(store){
			store.commit('setStatus', 'pending');

			setTimeout(() => {
				store.commit('setStatus', 'done');
			}, 500);
		},
		sendIncrease(store, state){
			console.log('sendInc');
			setTimeout(() => {
				store.commit('increase', state.cnt++);
				console.log('sendInc ok');
			}, 700);

		},
		sendDecrease(store, state){
			console.log('sendDec');
			setTimeout(() => {
				store.commit('decrease', function(){
					if(state.cnt > 1){
						state.cnt--;
					}
				});
				console.log('sendDec ok');
			}, 700);

		},
		sendSetCnt(store, state){
			// console.log('sendSetCnt');
			//console.log(state);
				store.commit('setCnt', function(){
					console.log('LOOL');
					let cnt = parseInt(state);
					if(isNaN(cnt) || cnt < 1){
						cnt = 1;
					}
					state.cnt = cnt;
				});
				console.log('sendSetCnt ok');


		}

	},
	strict: process.env.NODE_ENV !== 'production',
});

/*
	setCnt(state, p1, p2, ..., pN){
	commit('setCnt', p1, p2, ..., pN)

	mapMutations(['setCnt']) -> set
	set(p1, p2, ..., pN)
*/