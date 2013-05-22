/*jslint browser: true*/
/*global jQuery, Backbone*/

(function($, app, Backbone){
	'use strict';

	$(function() {

		Backbone.emulateHTTP = true;
		Backbone.emulateJSON = true;

		app.TM = new app.TemplateManager();

		var book_collection = new app.Books();
		book_collection.fetch();

		$.get('templates/bookshelf.templates.html', {}, function(content) {
			app.TM.addTemplates('.template', content);

			app.new_book_view = new app.NewBookView({
				el: $('#new_book_container'),
				collection: book_collection
			});

			app.books_view = new app.BooksView({
				el: $('#book_list_container'),
				collection: book_collection
			});

		}, 'html');

	});

}(jQuery, window, Backbone));