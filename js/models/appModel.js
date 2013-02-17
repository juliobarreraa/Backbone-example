// js/models/appModel.js

var app = app || {};
app.model = app.model || {};

define([], function() {
	app.model = Backbone.Model.extend({
		initialize: function()
		{
			console.log("initialize model");
		}
	});
});