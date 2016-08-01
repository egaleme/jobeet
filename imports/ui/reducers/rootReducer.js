import { combineReducers } from 'redux'

import selectedCategory from './selectedCategory.js'
import errors from './errorsReducer.js'
import created from './createdReducer.js'


const rootReducer = combineReducers({
	selectedCategory,
	errors,
	created,
	

})

export default rootReducer