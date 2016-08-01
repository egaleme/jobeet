import React from 'react';
import ReactDom from 'react-dom'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Meteor } from 'meteor/meteor'
import { connect } from 'react-redux'

import create from '../actions/created.js'
import notCreate from '../actions/notCreate.js'

 class CategoryCreate extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
				
	}

	componentWillUnmount() {
		this.props.dispatch(notCreate())
	}

	render() {
		const created = this.props.created;
		return (
			<div className="container">
			{created ? this.renderSuccess() : ''}
				
				<form  onSubmit={this.handleSubmit}> 
						
			<input type="text" className="form-control" placeholder="Enter Category Name"  ref="name"/> 
			
		  	  
			<div></div>
			<button type="submit" className="btn btn-success">Submit</button>
			</form>
			</div>
		);
	}

	handleSubmit(e) {
		let dispatch = this.props.dispatch
		e.preventDefault();
		const name = ReactDom.findDOMNode(this.refs.name).value.trim();
		if(!name){
			return
		}
//		call server
 		Meteor.call('categoryinsert', name, function(err) {
 			if (!err) {

 				dispatch(create())
 			}
 		})

 				
		ReactDom.findDOMNode(this.refs.name).value='';

	
	}

	renderSuccess() {
 		return <div className="alert alert-success">Success! Well done category created.</div>
		
	}


}

function mapStateToProps(state) {
	return {
		created: state.created
	}
}

export default connect(mapStateToProps)(CategoryCreate)