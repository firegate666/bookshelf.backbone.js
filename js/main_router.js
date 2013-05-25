/*jslint browser: true*/
/*global jQuery, Backbone*/

(function($, app, Backbone) {
	'use strict';

	app.MainRouter = Backbone.Router.extend({
		lastView: null,
		app: null,

		initialize: function(options) {
			this.app = options.app;
		},

		routes: {
			"reader/new": "reader_new",
			"reader/list": "reader_list",
			"book/new": "book_new",
			"book/list": "book_list",
			"": "home"
		},

		home: function() {
			this.app.onHome();
		},

		book_new: function() {
			this.app.onBookNew();
		},

		book_list: function(id) {
			this.app.onBookList();
		}

	});

}(jQuery, window, Backbone));
