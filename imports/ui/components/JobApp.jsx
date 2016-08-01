import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux'

import Job from './Job.jsx';

function JobApp({selectedCategory, jobs}) {

 	return (
	 	<div className="col-md-9">
			<Table striped bordered hover condensed>
			<thead>
			<tr>
			<th>Location</th><th>Position</th><th>Company</th>
			</tr>
			</thead>
			<tbody>
			{ selectedCategory ? jobs.filter(job => job.categoryid === selectedCategory).map(job => <Job key={job._id} job={job} />) 
			 : jobs.map(job => <Job key={job._id} job={job} />) }
			</tbody>
			</Table> 
			</div>
	 );

 }
	

function mapStateToProps(state) {
	return {
		selectedCategory: state.selectedCategory
	}
}

export default connect(mapStateToProps)(JobApp)