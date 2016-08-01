export default function created(state = false, action ={}) {
	switch(action.type) {
		case 'CREATED':
			return true
		case 'NOT_CREATED':
			return false
		default:
			return state
	}
}