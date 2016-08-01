export default function selectedCategory(state = '', action = {}) {
	switch(action.type) {
		case 'SELECT_CATEGORY':
			return action.value;

		case 'NOT_SELECT_CATEGORY':
			return ''
		default:
			return state;
	}
}