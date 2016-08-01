import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'


export const Categories = new Mongo.Collection('categories');

Categories.deny({
	insert() {return true},
	remove() { return true},
	update() {return true},
})

CategoriesSchema = new SimpleSchema({
	name: {
		type: String,

	}
})

Categories.attachSchema(CategoriesSchema)


Meteor.methods({
	'categoryinsert'(name) {
		if (!this.userId) {
			
			throw new Meteor.Error(404, 'Error 404: Not authorized', details);
		}	
		category = {}
		category.name = name
		return Categories.insert(category)
	}
})
