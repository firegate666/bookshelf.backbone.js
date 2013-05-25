/*jslint browser: true*/
/*global jQuery, Backbone*/

(function($, app, Backbone){
	'use strict';

	$(function() {

		Backbone.emulateHTTP = true;
		Backbone.emulateJSON = true;

		app.TM = new app.TemplateManager();
		app.App = new app.Bookshelf();

		app.book_collection = new app.Books();
		app.book_collection.fetch();

		$.get('templates/bookshelf.templates.html', {}, function(content) {
			app.TM.addTemplates('.template', content);

			app.Router = new app.MainRouter({
				app: app.App
			});

			Backbone.history.start();
		}, 'html');

	});

}(jQuery, window, Backbone));