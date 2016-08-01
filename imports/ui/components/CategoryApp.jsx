import React from 'react';
import { connect } from 'react-redux'

import Category from './Category.jsx';
import notSelectCategory from '../actions/notSelectCategory.js'

 function CategoryApp({dispatch, categories}) {		
 			return (
			<div className="col-md-3">
			<ul className="nav nav-pills nav-stacked" >
			<li onClick= {function() {dispatch(notSelectCategory()) }}><a className="btn" >All Jobs</a></li>
			{categories.map(category => <Category key={category._id} category= {category} />)}
			</ul>
			</div>
			);
			
			
	}


export default connect()(CategoryApp)