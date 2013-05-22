(function($, app, Backbone){

	app.BooksView = Backbone.View.extend({
		counter: 0,

		events: {
			'click button#add': 'addItem'
		},

		initialize: function(){
			this.$el = $('body');

			_.bindAll(this, 'render', 'addItem', 'appendItem'); // fixes loss of context for 'this' within methods

			this.collection = new Books();
			this.collection.fetch();

			this.collection.on('add', this.appendItem); // collection event binder

			this.render(); // not all views are self-rendering. This one is.
		},

		render: function(){
			var self = this;
			this.$el.append(_.template(this.$el.find('#books').html()));

			this.$el.find('#new_book_form').html('').append(_.template(this.$el.find('#new_book').html(), {form_data: new Book()}));

			_(this.collection.models).each(function(item){ // in case collection is not empty
				self.appendItem(item);
			}, this);
		},

		addItem: function(){
			var item = new Book(),
				$form = this.$el.find('form[name="newBook"]'),
				form_data = $form.serializeArray(),
				book_data = {},
				book_collection = this.collection;

			$.each(form_data, function(k, input) {
				book_data[input.name] = input.value;
			});

			this.$el.find('#new_book_form').html('').append(_.template(this.$el.find('#new_book').html(), {form_data: book_data}));
			this.$el.find('form[name="newBook"]').find('input').css('background', 'auto');

			item.on("invalid", function(model, error) {
				$form.find('input[name="'+error.key+'"]').css('background', 'red');
				$form.find('.error').text(error.message);
			});

			item.save(book_data, {success: function() {
				book_collection.add(item); // add item to collection; view is updated via event 'add'
			}});
		},

		appendItem: function(item){
			var itemView = new BookView({
				model: item,
				template: this.$el.find('#book').html()
			});
			$('tbody', this.$el).append(itemView.render().el);
		}
	});

})(jQuery, window, Backbone);
