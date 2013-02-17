// js/routers/appRouter.js

var app = app || {};

app.router = app.router || {};

define([], function() {
	app.router = Backbone.Router.extend({
		initialize: function()
		{
			Backbone.history.start();
		},
		routes: {
			'user/:id': 'getName',
			'add_new_element': 'addNewElement'
		},
		getName: function(id)
		{
			var contenido1 = new app.model({id: id, title: 'Nuevo contenido'});
			var contenido2 = new app.model({id: id + 1, title: 'Anterior contenido'});
			this.collection = new app.collection([contenido1, contenido2]);

			this.view = new app.view({el: jQuery('#content'), collection: this.collection});
			this.view.render();
		},
		/*addNewElement: function()
		{
			this.collection.add(new app.model( { title: 'Nuevo contenido añadido' } ));
		}*/
	});
});