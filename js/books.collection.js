/*jslint browser: true*/
/*global Backbone*/

(function(app, Backbone){
	'use strict';

	app.Books = Backbone.Collection.extend({
		model: app.Book,
		url: 'books/'
	});

}(window, Backbone));
