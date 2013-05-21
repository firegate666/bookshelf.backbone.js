(function($, app, Backbone){

	app.BooksView = Backbone.View.extend({
		counter: 0,

		events: {
			'click button#add': 'addItem'
		},

		initialize: function(){
			var _self = this;

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
			_(this.collection.models).each(function(item){ // in case collection is not empty
				self.appendItem(item);
			}, this);
		},

		addItem: function(){
			var item = new Book(),
				book_signature = this.$el.find('input[name="signature"]').val(),
				book_name = this.$el.find('input[name="name"]').val();

			if (!book_signature || !book_name) {
				alert('enter proper name and signature');
				return;
			}

			item.set({
				signature: item.get('signature') + book_signature,
				name: book_name
			});
			item.save();

			this.collection.add(item); // add item to collection; view is updated via event 'add'
		},

		appendItem: function(item){
			var itemView = new BookView({
				model: item,
				template: this.$el.find('#book').html()
			});
			$('ul', this.$el).append(itemView.render().el);
		}
	});

})(jQuery, window, Backbone);
