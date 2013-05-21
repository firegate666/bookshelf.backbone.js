(function($, app, Backbone){

	app.Books = Backbone.Collection.extend({
		model: Book,
		url: 'books/'
	});

})(jQuery, window, Backbone);
