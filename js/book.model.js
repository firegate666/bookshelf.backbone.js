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

		/**
		 * default book values
		 *
		 * @var {object}
		 */
		defaults : {
			title : '',
			author : '',
			publisher : '',
			signature : '',
			keywords : '',
			isbn13 : ''
		},

		/**
		 * validate model
		 *
		 * @return {object|null} containing message and key of invalid field
		 */
		validate : function(attrs, options) {
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
