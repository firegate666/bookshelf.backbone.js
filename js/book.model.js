(function($, app, Backbone){

	app.Book = Backbone.Model.extend({

		urlRoot : 'book/',

		url : function() {
			if (this.isNew()) {
				return this.urlRoot;
			} else {
				return this.urlRoot + '?id=' + this.id;
			}
		},

		defaults: {
			title: '',
			author: '',
			publisher: '',
			signature: '',
			keywords: '',
			isbn13: ''
		},

		validate: function(attrs, options) {
			if (!attrs.title) {
				return {
					key: 'title',
					message: 'enter proper title'
				}
			}

			if (!attrs.author) {
				return {
					key: 'author',
					message: 'enter proper author'
				}
			}

			if (attrs.isbn13 && attrs.isbn13.length < 13) {
				return {
					key: 'isbn13',
					message: 'isbn-13 must be 13 characters'
				}
			}
		}

	});

})(jQuery, window, Backbone);
