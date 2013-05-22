(function($, app, Backbone){

	app.BooksView = Backbone.View.extend({

		initialize: function(){
			_.bindAll(this, 'render', 'appendItem'); // fixes loss of context for 'this' within methods

			this.collection.on('add', this.appendItem); // collection event binder
			this.render(); // not all views are self-rendering. This one is.
		},

		/**
		 * render book list
		 */
		render: function(){
			var self = this;
			this.$el.append(_.template(TM.getTemplate('books')));

			_(this.collection.models).each(function(item){ // in case collection is not empty
				self.appendItem(item);
			}, this);
		},

		/**
		 * add new book to list
		 *
		 * @param {Book} book
		 */
		appendItem: function(book){
			var itemView = new BookView({
				model: book
			});
			
			this.$el.find('tbody')
				.append(itemView.render().el);
		}
	});

})(jQuery, window, Backbone);
