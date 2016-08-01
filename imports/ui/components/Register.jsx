import React from 'react'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'


const Register = () => {

	let email;
	let password;
	let username;
	let firstname;
	let lastname;

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!username.value || !password.value || !email.value || !firstname.value || !lastname.value){
			return
		}

	Accounts.createUser({
		username: username.value,
		password: password.value,
		email: email.value,
		profile: {
			firstname: firstname.value, lastname: lastname.value
		}
	}, function (err) {
	if(!err) {
		FlowRouter.go('/')
	}
	});

	email.value='';
	password.value='';
	firstname.value='';
	lastname.value='';
	username.value='';
		

	}

		return (
		<div className="container">	
		<form className="form-horizontal" role="form" onSubmit={handleSubmit}> 
		 <div className="form-group">
		 <label htmlFor="firstname" className="col-sm-2 control-label">First Name</label> 
		 <div className="col-sm-10">
		  <input type="text" className="form-control" placeholder="Enter First Name" ref={function(node) {
		  	firstname = node;
		  }} /> </div> </div> 
		  <div className="form-group">
		  <label htmlFor="lastname" className="col-sm-2 control-label">Last Name</label>
		  <div className="col-sm-10">
		  <input type="text" className="form-control" placeholder="Enter Last Name" ref={function(node) {
		  	lastname = node;
		  }} /> </div> </div>
		  <div className="form-group">
		  <label htmlFor="username" className="col-sm-2 control-label">Username</label> 
		  <div className="col-sm-10">
		  <input type="text" className="form-control"  placeholder="Enter Username" ref={function(node) {
		  	username = node;
		  }} /> </div> </div>  
		  <div className="form-group">
		  <label htmlFor="email" className="col-sm-2 control-label">Email</label>
		  <div className="col-sm-10">
		  <input type="text" className="form-control" placeholder="Enter Your Emal" ref={function(node) {
		  	email = node;
		  }} /> </div> </div>
		  <div className="form-group">
		  <label htmlFor="password" className="col-sm-2 control-label">Password</label> 
		  <div className="col-sm-10">
		  <input type="password" className="form-control"  placeholder="Enter Password" ref={function(node) {
		  	password = node;
		  }} /> </div> </div>
		  <div className="form-group"> <div className="col-sm-offset-2 col-sm-10"> <button type="submit" className="btn btn-default">Register</button> </div> </div>
		   </form>
		  </div>
			);

}

export default Register