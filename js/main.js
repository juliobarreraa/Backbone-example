// js/main.js

var app = app || {};

require.config({
	shim: {
		jquery: {
			exports: 'jQuery'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore']
		},
		appRouter: {
			deps: ['appView']
		},
		appView: {
			deps: ['appCollection']
		},
		appModel: {
			deps: ['backbone']
		},
		appCollection: {
			deps: ['appModel', 'localstorage']
		},
		localstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		appRouter: 'routers/appRouter',
		appView: 'views/appView',
		appModel: 'models/appModel',
		appCollection: 'collections/appCollection',
		localstorage: 'lib/backbone.localStorage'
	}
});

define([
	'appRouter'
], function() {
	new app.router();
});