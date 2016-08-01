import React from 'react'
import {mount, withOptions} from 'react-mounter'
import {FlowRouter} from 'meteor/kadira:flow-router'
import { Meteor } from 'meteor/meteor'


import  {AppLayout}  from '../../ui/layout/AppLayout.jsx'
import  CategoryCreate from '../../ui/components/CategoryCreate.jsx'
import  JobCreateContainer from '../../ui/containers/JobCreateContainer.jsx';
import  JobDetailContainer from '../../ui/containers/JobDetailContainer.jsx'
import  JobPanel from '../../ui/components/JobPanel.jsx'
import  Register from '../../ui/components/Register.jsx'
import  Login from '../../ui/components/Login.jsx'

const mount2 = withOptions({
    rootId: 'container',
    
}, mount);

FlowRouter.route('/', {
	action() {
		mount2(AppLayout, {content: <JobPanel />});
	}
});

FlowRouter.route('/createcategory', {
	name: 'createcategory',
		action(){
		mount2(AppLayout, {content: <CategoryCreate />});
	}
});

FlowRouter.route('/createjob', {
	name: 'createjob',
	action(){
		mount2(AppLayout, {content: <JobCreateContainer />});
	}
});

FlowRouter.route('/register', {
	name: 'register',
	action(){
		mount2(AppLayout, {content: <Register />});
	}
});


FlowRouter.route('/login', {
	name: 'login',
	action(){
		mount2(AppLayout, {content: <Login />});
	}
});

FlowRouter.route('/job/:id', {
	action() {
		mount2(AppLayout, {content: <JobDetailContainer />})
	}
});