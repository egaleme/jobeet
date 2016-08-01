import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor'


import { Jobs } from '../../api/job/job.js';
import JobApp from '../components/JobApp.jsx';



export default createContainer(() => {
	if (!!Meteor.user()){
		Meteor.subscribe('jobsSignedOn')
	} else {
		Meteor.subscribe('jobs')
	}
	
	return {
		jobs: Jobs.find().fetch(),
		
	};
}, JobApp) 