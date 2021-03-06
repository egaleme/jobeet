import React from 'react'
import {mount, withOptions} from 'react-mounter'
import {FlowRouter} from 'meteor/kadira:flow-router'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'


import  {AppLayout}  from '../../ui/layout/AppLayout.jsx'
import  CategoryCreate from '../../ui/components/CategoryCreate.jsx'
import  JobCreateContainer from '../../ui/containers/JobCreateContainer.jsx';
import  JobDetailContainer from '../../ui/containers/JobDetailContainer.jsx'
import  JobPanel from '../../ui/components/JobPanel.jsx'
import  Register from '../../ui/components/Register.jsx'
import  Login from '../../ui/components/Login.jsx'
import UserRegistered from '../../ui/components/UserRegistered.jsx'

const mount2 = withOptions({
    rootId: 'container',
    
}, mount);

FlowRouter.route('/', {
	action() {
		mount2(AppLayout, {content: <JobPanel />});
	}
});

FlowRouter.route('/usersignedup', {
	action() {
		mount2(AppLayout, {content: <UserRegistered />});
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

Accounts.onEmailVerificationLink((token, done) => {

	Accounts.verifyEmail(token, function (err) {
	if(!err) {
		
		done();
	}
	
	});
});
