import React from 'react'
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'

export default function Login() {
		let username;
		let password;

		const handleSubmit= (e) => {
		e.preventDefault()
		if(!username.value || !password.value) {
			return
		}

		Meteor.loginWithPassword(username.value, password.value, err => {
					
			if (!err) {
				FlowRouter.go('/')
				
			}

		})

		username.value='';
		password.value='';
	  }

		return (
		<div>	
		<form className="form-horizontal" role="form" onSubmit={handleSubmit}> 
		 <div className="form-group">
		 <label htmlFor="username" className="col-sm-2 control-label">Username/Email</label> 
		 <div className="col-sm-3 col-lg-6">
		  <input type="text" className="form-control" placeholder="Enter Username or Email" ref={function(node) {
		  	username = node;
		  }} /> </div> </div> 
		  <div className="form-group">
		  <label htmlFor="password" className="col-sm-2 control-label">Password</label> 
		  <div className="col-sm-3 col-lg-6">
		  <input type="password" className="form-control"  placeholder="Enter Password" ref={function(node) {
		  	password = node;
		  }} required /> </div> </div>
		  <div className="form-group"> <div className="col-sm-offset-2 col-sm-10"> <button type="submit" className="btn btn-primary">Login</button> </div> </div>
		   </form>
		  </div>
			)
	}