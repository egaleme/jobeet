import { Meteor } from 'meteor/meteor'

import { Jobs } from '../job'

Meteor.publish('jobs', () => Jobs.find({}, {sort: {createdAt: -1}}))

Meteor.publish('jobsSignedOn', function () {
	return Jobs.find({ownerId: this.userId}, {sort: {createdAt: -1}})
})