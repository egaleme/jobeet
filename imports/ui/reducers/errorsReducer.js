export default function errors(state = '', action ={}) {
	switch(action.type) {
		case 'ERRORS':
			return action.value
		default:
			return state
	}
}