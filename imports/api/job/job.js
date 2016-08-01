import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

 
export const Jobs = new Mongo.Collection('jobs');

Jobs.deny({
	insert() {return true},
	remove() { return true},
	update() {return true},
	
});

Meteor.users.deny({
	insert() {
		return true
	},
	update() {
		return true
	},
	remove() {
		return true
	},
	
});

JobsSchema = new SimpleSchema({
	description: {
		type: String
	},
	location: {
		type: String
	},
	position: {
		type: String
	},
	company: {
		type: String
	},
	categoryid: {
		type: String
	},
	ownerId: {
		type: String,
		defaultValue: '',
	},
	createdAt : {
		type: Date,
		denyUpdate: true,
	},
	ownername: {
		type: String,
		defaultValue: '',
	},
})

Jobs.attachSchema(JobsSchema)

Meteor.methods({
	'jobinsert'(job) {

	  if (! this.userId) {
      throw new Meteor.Error('not-authorized');
   	 }

		job.ownerId = this.userId
		job.ownername= Meteor.users.findOne(this.userId).username
		job.createdAt= new Date()

		return Jobs.insert(job)
	},

	'jobupdate'(job){
		if (!this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		Jobs.update({_id: job.id, ownerId: Meteor.userId()}, {$set: {description: job.description, location: job.location, company: job.company, position: job.position, categoryid: job.categoryid}})
	},

	'jobdelete'(jobId) {
		if (!this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		Jobs.remove({_id: jobId, ownerId: Meteor.userId()})
	},

})
