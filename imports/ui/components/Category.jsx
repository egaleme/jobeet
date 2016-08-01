import React from 'react'
import { connect } from 'react-redux'

import selectCategory from '../actions/selectCategory.js'

 function Category({category,dispatch}) {
		
		return <li onClick = {function() {dispatch(selectCategory(category._id))}}><a className="btn">{category.name}</a></li>
	}

export default connect()(Category)