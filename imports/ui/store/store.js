import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

import rootReducer from '../reducers/rootReducer.js'

const Store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))

export default Store