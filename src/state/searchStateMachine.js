import { Machine, interpret, assign } from 'xstate';

const searchStateMachine = Machine({
	initial: 'idle',
	context: {
		results: []
	},
	states: {
		idle: {
			on: {
				SEARCH: 'loading'
			}
		},
		loading: {
			on: {
				SEARCH_SUCCESS: {
					target: 'success',
					actions: assign({
						// update the results with the event data
						results: (context, event) => event.data
					})
				},
				SEARCH_NORESULTS: {
					target: 'noresults',
					actions: assign({
						// update the results with the event data
						results: (context, event) => event.data
					})
				},
				SEARCH_FAILED: 'error',
				IDLE: 'idle'
			}
		},
		error: {
			on: {
				SEARCH: 'loading'
			}
		},
		noresults: {
			on: {
				SEARCH: 'loading',
				IDLE: 'idle'
			}
		},
		success: {
			on: {
				SEARCH: 'loading',
				IDLE: 'idle'
			}
		}
	}
});

export default searchStateMachine;
