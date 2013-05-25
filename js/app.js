/*jslint browser: true*/
/*global jQuery*/

(function($, app) {
	'use strict';

	app.Bookshelf = function() {

		var currentView = null;

		this.onHome = function() {
			if (currentView) {
				currentView.remove();
				currentView = null;
			}
		};

		this.onBookNew = function() {
			if (currentView) {
				currentView.remove();
				currentView = null;
			}

			currentView = new app.NewBookView({
				el: $('<div></div>').appendTo('#page'),
				collection: app.book_collection
			});
		};

		this.onBookList = function(id) {
			if (currentView) {
				currentView.remove();
				currentView = null;
			}

			currentView = new app.BooksView({
				el: $('<div></div>').appendTo('#page'),
				collection: app.book_collection
			});
		};

	};

}(jQuery, window));
