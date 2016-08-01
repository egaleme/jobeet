import { Meteor } from 'meteor/meteor'

let smtp;
Meteor.startup(function() {
	smtp = {
		username: 'egaleme@gmail.com',
		password: '200lagoslagos1000$',
		server: 'smtp.gmail.com',
		port: 587
	};

/*	process.env.MAIL_URL = 'smtp://' +
			encodeURIComponent(smtp.username) + ':' +
			encodeURIComponent(smtp.password) + '@' +
			encodeURIComponent(smtp.server) + ':' +
			smtp.port;
*/
	process.env.ROOT_URL = 'http://localhost:3000';
})
