/*jslint browser: true*/
/*global jQuery*/

(function($, app) {
	'use strict';

	app.Bookshelf = function() {

		/**
		 * store current view
		 */
		var currentView = null;

		/**
		 * handle switch to homescreen
		 */
		this.onHome = function() {
			if (currentView) {
				currentView.remove();
				currentView = null;
			}
		};

		/**
		 * handle book new dialog
		 */
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

		/**
		 * handle book list
		 */
		this.onBookList = function() {
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
