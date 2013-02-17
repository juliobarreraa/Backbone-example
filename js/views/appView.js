// js/views/appView.js

var app = app || {};
app.view = app.view || {};

define([], function() {
	app.view = Backbone.View.extend({
		render: function()
		{
			var template = _.template(jQuery('#template').html());

			this.$el.html('');
			this.$el.append( template({models: this.collection.toJSON()}) );

			return this;
		}
	});
});