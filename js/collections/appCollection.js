// js/collections/appCollection.js

var app = app || {};
app.collection = app.collection || {};

define([], function() {
	app.collection = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage('todos-backbone'),
		initialize: function()
		{
			console.log("initialize collection");
			this.on('add', this.add_element);
		},
		add_element: function()
		{
		}
	});
});