import { Meteor } from 'meteor/meteor'

let smtp;
Meteor.startup(function() {
	smtp = {
		username: 'jobeetapp@gmail.com',
		password: 'ekewan07',
		server: 'smtp.gmail.com',
		port: 587
	};
/*
	process.env.MAIL_URL = 'smtp://' +
			encodeURIComponent(smtp.username) + ':' +
			encodeURIComponent(smtp.password) + '@' +
			encodeURIComponent(smtp.server) + ':' +
			smtp.port;

	process.env.ROOT_URL = 'http://jobeetapp.herokuapp.com';
*/
})
