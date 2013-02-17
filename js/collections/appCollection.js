// js/collections/appCollection.js

var app = app || {};
app.collection = app.collection || {};

define([], function() {
	app.collection = Backbone.Collection.extend({
		localStorage: new Store('model-backbone'),
		model: app.model,
		initialize: function()
		{
			console.log(this.localStorage);
			console.log("initialize collection");
		}
	});
});