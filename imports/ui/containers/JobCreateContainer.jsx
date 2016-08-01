import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

//import { Jobs } from '../../api/job/job.js';
import JobCreate from '../components/JobCreate.jsx'
import { Categories } from '../../api/category/category.js';


export default createContainer(() => {
	Meteor.subscribe('categories')
	return {
		categories: Categories.find({}, {sort: {name :1}}).fetch()
	};
}, JobCreate);