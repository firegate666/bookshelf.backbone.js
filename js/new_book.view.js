(function($, app, Backbone){

	app.NewBookView = Backbone.View.extend({
		counter: 0,

		events: {
			'click button#add': 'addItem'
		},

		initialize: function(){
			_.bindAll(this, 'render', 'addItem'); // fixes loss of context for 'this' within methods

			this.render(); // not all views are self-rendering. This one is.
		},

		/**
		 * render new book form
		 */
		render: function(){
			this.$el.append(_.template(TM.getTemplate('new_book')));
		},

		/**
		 * add new book item
		 * read values from form
		 * try to save
		 * add to collection
		 */
		addItem: function(){
			var _self = this,
				new_book = new Book(),
				$form = this.$el.find('form'),
				form_data = $form.serializeArray(),
				book_data = {},
				book_collection = this.collection;

			$.each(form_data, function(k, input) {
				book_data[input.name] = input.value;
			});

			new_book.on("invalid", function(model, error) {
				$form.find('.error').text(error.message);
			});

			new_book.save(book_data, {success: function() {
				book_collection.add(new_book); // add item to collection; view is updated via event 'add'
				_self.reset();
			}});
		},

		/**
		 * reset form
		 * empty input fields
		 * clear error messages
		 */
		reset: function() {
			var $form = this.$el.find('form');

			$form.find('.error').text('');
			$form.get(0).reset();
		}
	});

})(jQuery, window, Backbone);
