// js/views/appView.js

var app = app || {};
app.view = app.view || {};

define([], function() {
	app.view = Backbone.View.extend({
		initialize: function()
		{
			this.collection.on('add', this.render, this);
		},
		render: function()
		{
			console.log("Render");
			var template = _.template(jQuery('#template').html());

			this.collection.each(function(model) {
				model.save();
			});

			this.$el.html('');
			this.$el.append( template({models: this.collection.toJSON()}) );

			return this;
		}
	});
});