// js/collections/appCollection.js

var app = app || {};
app.collection = app.collection || {};

define([
], function() {
	app.collection = Backbone.Collection.extend({
		initialize: function()
		{
			console.log("initialize collection");
		}
	});
});