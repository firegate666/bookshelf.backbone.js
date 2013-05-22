(function($, app, Backbone){

	$(function() {

		Backbone.emulateHTTP = true;
		Backbone.emulateJSON = true;

		app.TM = new TemplateManager()

		var book_collection = new Books();
		book_collection.fetch();

		$.get('templates/bookshelf.templates.html', {}, function(content) {
			app.TM.addTemplates('.template', content);

			new app.NewBookView({
				el: $('#new_book_container'),
				collection: book_collection
			});

			new app.BooksView({
				el: $('#book_list_container'),
				collection: book_collection
			});

		}, 'html');

	});

})(jQuery, window, Backbone);