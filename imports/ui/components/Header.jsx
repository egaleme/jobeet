import React from 'react'
import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Navbar } from 'react-bootstrap'

const Header = (props) =>  {
	let {user} = props;
	let email;
	let password;

	const handleSubmit = (event) => {
		event.preventDefault();
		
		if(!email.value || !password.value) {
			return
		}

		Meteor.loginWithPassword(email.value, password.value, err =>{
			if(!err) {
				FlowRouter.go('/')
			}
		})

		email.value='';
		password.value='';
	

	}

	const logout = ()=> {
		Meteor.logout(function(err) {
			if(!err) {
				FlowRouter.go('/')
			}
		})
		
	}

	const renderGuest = () => {
		return(
			<Navbar inverse={true}> <Navbar.Header> <Navbar.Brand><a href="/">Jobeet</a></Navbar.Brand> </Navbar.Header>
<ul className="nav navbar-nav navbar-right">
<li >
<a href="/register">Register</a>
</li>
</ul> 
<form onSubmit = {handleSubmit} className="navbar-form navbar-right" role="search">
 <div className="form-group"> 
 <input type="text" className="form-control" placeholder="your email or username"  ref={function(node) {
	email = node;
}}/> 
</div> 
<div className="form-group"> <input type="password" className="form-control" placeholder="your password"  ref={function(node) {
	password = node;
}}/> 
</div> 
<button className="btn btn-primary">Login</button>  
</form>

 </Navbar>

			)
	}

	const renderPostCategory = () => {
			const username = user.username
		if (username === "admin") {
			return <a className="btn btn-info navbar-btn" href="/createcategory">Post Job Categories</a>
		}
		return ""
	}

	const renderAuth = () => {
		
		return(
<Navbar inverse={true}> <Navbar.Header> <Navbar.Brand><a href="/">Jobeet</a></Navbar.Brand> </Navbar.Header>
<div className="navbar-right">
<p className="navbar-text ">Hello {user.profile.firstname}</p>
<a className="btn btn-primary navbar-btn" href="/createjob">Post Jobs</a>
{renderPostCategory()}
<button className="btn btn-success navbar-btn " onClick = {logout} type="button" >Logout</button>
</div>
</Navbar>

			)
	}

		return (
			<header>
			{user && user.emails[0].verified ? renderAuth() : renderGuest()}
			
			</header>
			)	
	
}

export default Header;