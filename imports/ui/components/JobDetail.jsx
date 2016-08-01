import React from 'react'
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'


export default class JobDetail extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.removeJob = this.removeJob.bind(this)
		this.changeJobDescription = this.changeJobDescription.bind(this)
		this.changeJobPosition = this.changeJobPosition.bind(this)
		this.changeJobLocation = this.changeJobLocation.bind(this)
		this.changeJobCompany = this.changeJobCompany.bind(this)
		this.changeCategory = this.changeCategory.bind(this)
		
		this.state = {
			selectValue: this.props.job.categoryid,
			description: this.props.job.description,
			location: this.props.job.location,
			company: this.props.job.company,
			position: this.props.job.position
		  }		
		}


	render() {
		let canShow = this.props.canShow
		let job = this.props.job
		categories = this.props.categories
		let selectValue = this.state.selectValue
		let description = this.state.description
		let location = this.state.location
		let company = this.state.company
		let position = this.state.position
		let coptions = this.renderCategories()

		if (canShow){
		return (
	       <div className = " panel panel-info">
			<div className="panel-heading">
			<div className="panel-title">
			Update This Job Detail
			</div>
			</div>
			<div className="panel-body">
			<form className="form-horizontal" onSubmit={this.handleSubmit}> 
			
			<div className="form-group">
			<label for="description" className="col-sm-2 control-label">Description</label>
			<div className="col-sm-10">
			<input type="text" className="form-control" id="description" value= {description} onChange={this.changeJobDescription}  ref="description"/> 
			</div>
			</div>
		   
		    <div className="form-group">
			<label for="company" className="col-sm-2 control-label">Company</label>
			<div className="col-sm-10">
		   <input type="text" className="form-control"  id="company" value= {company} onChange={this.changeJobCompany} ref="company"/> 
		  </div>
		  </div>
		   
		   <div className="form-group">
			<label for="position" className="col-sm-2 control-label">Position</label>
			<div className="col-sm-10">
		   <input type="text" className="form-control"  id="position" value={position} onChange={this.changeJobPosition}  ref="position"/> 
		    </div>
		    </div>
		  
		    <div className="form-group">
			<label for="location" className="col-sm-2 control-label">Location</label>
			<div className="col-sm-10">
		   <input type="text" className="form-control" id="location" value={location} onChange={this.changeJobLocation} ref="location"/> 
		  </div>
		  </div>
		   
		   <div className="form-group">
		  	<label className="col-sm-2 control-label">Select Category</label>
		  	<div className="col-sm-3">
			<select className="form-control" onChange= {this.changeCategory} value={selectValue} ref="categoryid">
				{coptions}
			</select>
			</div>
			</div>
			<div></div>
           <div className="form-group">	
           <div className="col-sm-offset-2 col-sm-10">	
			<button type="submit" className="btn btn-primary ">Edit</button>
			
			<button onClick={this.removeJob} className="btn btn-danger ">Remove</button>
			</div>
			</div>
			
			
			</form>
			
			</div>
			</div>
			)

	   }
	    return (
	       <div className = " panel panel-info">
			<div className="panel-heading">
			<div className="panel-title">
			Job Detail
			</div>
			</div>
			<div className="panel-body">
			<p>{job.description}</p>
			<p>{job.location}</p>
			<p>{job.position}</p>
			</div>
			</div>
			)
	}

	renderCategories() {
		return this.props.categories.map(category =>
			<option key={category._id} value={category._id}>{category.name}</option>
		)

	}

	handleSubmit(e) {
		let dispatch = this.props.dispatch
		let job = this.props.job
		e.preventDefault()
		var description = this.refs.description.value.trim()
		var categoryid = this.refs.categoryid.value.trim()
		var company = this.refs.company.value.trim()
		var position = this.refs.position.value.trim()
		var location = this.refs.location.value.trim()
		
		if(!description || !categoryid || !company || !position || !location){
			return
		}
			
		// send to server
		const j = {
			id: job._id,
			description,
			categoryid,
			company,
			position,
			location,	
		}

		Meteor.call('jobupdate', j, function(err) {
			if(!err) {
				FlowRouter.go('/')
			}
		})

		
		this.refs.description.value='';
		this.refs.company.value='';
		this.refs.position.value='';
		this.refs.location.value='';
	}

	changeJobLocation(e) {
		this.setState({location: e.target.value})
	}

	changeJobDescription(e) {
		this.setState({description: e.target.value})
	}

	changeJobCompany(e) {
		this.setState({company: e.target.value})
	}

	changeJobPosition(e) {
		this.setState({position: e.target.value})
	}

	changeCategory(e) {
				
		this.setState({selectValue: e.target.value})

	}

	removeJob() {
		let jobId = this.props.job._id

		Meteor.call('jobdelete', jobId, function(err) {
			if(!err) {
				FlowRouter.go('/')
			}
		})
	}


}

