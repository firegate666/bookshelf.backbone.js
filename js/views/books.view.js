/*jslint browser: true*/
/*global Backbone, _*/

(function(app, Backbone, us){
	'use strict';

	app.BooksView = Backbone.View.extend({

		initialize: function(){
			this.collection.on('add', this.appendItem, this); // collection event binder
			this.render(); // not all views are self-rendering. This one is.
		},

		/**
		 * render book list
		 */
		render: function(){
			var self = this;
			this.$el.append(us.template(app.TM.getTemplate('books')));

			us(this.collection.models).each(function(item){ // in case collection is not empty
				self.appendItem(item);
			}, this);
		},

		/**
		 * add new book to list
		 *
		 * @param {Book} book
		 */
		appendItem: function(book){
			var itemView = new app.BookView({
				model: book
			});
			
			this.$el.find('tbody')
				.append(itemView.render().el);
		}
	});

}(window, Backbone, _));
