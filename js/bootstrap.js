(function($, app, Backbone){

	$(function() {

		Backbone.emulateHTTP = true;
		Backbone.emulateJSON = true;

		var listView = new app.BooksView();

	});

})(jQuery, window, Backbone);