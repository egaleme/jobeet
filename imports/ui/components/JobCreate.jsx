import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { connect } from 'react-redux'

import create from '../actions/created.js'
import notCreate from '../actions/notCreate.js'
import selectCategory from '../actions/selectCategory.js'
import notSelectCategory from '../actions/notSelectCategory.js'

 class JobCreate extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	    
	     this.props.dispatch(notCreate())
	     this.props.dispatch(notSelectCategory())
	
	}

	componentWillUnmount() {
		 this.props.dispatch(notCreate())
	     this.props.dispatch(notSelectCategory())
	}

	render() {
		var created = this.props.created;
		var selectValue = this.props.selectValue;
		var coptions = this.renderCategories();
		return (
			<div className="container">
			{created ? this.renderSuccess() : ""}
			<form className="form-inline"  onSubmit={this.handleSubmit}> 
			
			
			<input type="text" className="form-control" id="description" placeholder="Enter Description"  ref="description"/> 
			
		   
		    
		   <input type="text" id="company" placeholder="Enter Company"  ref="company"/> 
		  
		   
		   <input type="text" id="position" placeholder="Enter Position"  ref="position"/> 
		    
		  
		   <input type="text" id="location" placeholder="Enter Location"  ref="location"/> 
		  
		   
			<label><select onChange= {this.handleChange} value={selectValue} ref="categoryid">
				{coptions}
			</select>Select Category</label>
			<div></div>
			<button type="submit" className="btn btn-success">Submit</button>
			</form>
			</div>


			);
	}

	renderCategories() {
		return this.props.categories.map(category =>
			<option key={category._id} value={category._id}>{category.name}</option>
		);

	}
	
	
	handleChange(e) {
				
		this.props.dispatch(selectCategory(e.target.value))

	}

	handleSubmit(e) {
		let dispatch = this.props.dispatch
		e.preventDefault()
		var description = ReactDom.findDOMNode(this.refs.description).value.trim()
		var categoryid = ReactDom.findDOMNode(this.refs.categoryid).value.trim()
		var company = ReactDom.findDOMNode(this.refs.company).value.trim()
		var position = ReactDom.findDOMNode(this.refs.position).value.trim()
		var location = ReactDom.findDOMNode(this.refs.location).value.trim()
		
		if(!description || !categoryid || !company || !position || !location){
			return
		}
			
		// send to server
		const job = {
			description,
			categoryid,
			company,
			position,
			location,	
		}

		Meteor.call('jobinsert', job, function(err) {
			if (!err) {
				dispatch(create())
			}
		})

		
		ReactDom.findDOMNode(this.refs.description).value='';
		ReactDom.findDOMNode(this.refs.company).value='';
		ReactDom.findDOMNode(this.refs.position).value='';
		ReactDom.findDOMNode(this.refs.location).value='';


		
	}

	renderSuccess() {

	return 	<div className="alert alert-success">Success! Well done job created.</div>;
	} 
	
}

function mapStateToProps(state) {
	return {
		created: state.created,
		selectValue: state.selectedCategory
	}
}

export default connect(mapStateToProps)(JobCreate)
