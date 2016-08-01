import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'

import JobDetail from '../components/JobDetail'
import { Jobs } from '../../api/job/job.js'
import { Categories } from '../../api/category/category.js'

export default createContainer(() =>{
	const id = FlowRouter.getParam("id")
	Meteor.subscribe('categories')
	if (!!Meteor.user()){
		Meteor.subscribe('jobsSignedOn')
				
	} else {
		Meteor.subscribe('jobs')
	}
		return {
		canShow: !!Meteor.user(),	
		job: Jobs.findOne(id),
		categories: Categories.find({}).fetch()
		
	};
}, JobDetail)