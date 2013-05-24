/*jslint browser: true*/
/*global Backbone, _*/

(function(app, Backbone, us){
	 'use strict';

	app.NewBookView = Backbone.View.extend({
		counter: 0,

		events: {
			'click input#add': 'addItem'
		},

		initialize: function(){
			this.render(); // not all views are self-rendering. This one is.
		},

		/**
		 * render new book form
		 */
		render: function(){
			this.$el.append(us.template(app.TM.getTemplate('new_book')));
		},

		/**
		 * add new book item
		 * read values from form
		 * try to save
		 * add to collection
		 */
		addItem: function(){
			var _self = this,
				new_book = new app.Book(),
				$form = this.$el.find('form'),
				form_data = $form.serializeArray(),
				book_data = {},
				book_collection = this.collection;

			us.each(form_data, function(input) {
				book_data[input.name] = input.value;
			});

			new_book.on("invalid", function(model, error) {
				var invalid_value = model.get(error.key);

				$form.find('.error').text(
					error.message
					+ '; is '
					+ (invalid_value || 'empty')
				);
			}, this);

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

}(window, Backbone, _));
