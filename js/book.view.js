(function($, app, Backbone){

	app.BookView = Backbone.View.extend({
		tagName: 'li', // name of (orphan) root tag in this.el
		template: null,

		events: {
			'click span.swap':  'swap',
			'click span.delete': 'remove'
		},

		initialize: function(options) {
			if (options.template) {
				this.template = options.template;
			}

			_.bindAll(this, 'render', 'renderBookData', 'unrender', 'swap', 'remove'); // every function that uses 'this' as the current object should be in here

			this.model.bind('change', this.renderBookData);
			this.model.bind('remove', this.unrender);
		},

		renderBookData: function(a, b, c) {
			var content = this.model.get('signature')+' '+this.model.get('name');

			if (this.model.get('created_at')) {
				content += ', created at ' + (new Date(parseInt(this.model.get('created_at'), 10)*1000));
			}

			if (this.model.get('changed_at')) {
				content += ', changed at ' + (new Date(parseInt(this.model.get('changed_at'), 10)*1000));
			}

			$(this.el).find('.model').html(content);
			return this;
		},

		render: function(){
			$(this.el).html(_.template(this.template));
			return this.renderBookData(); // for chainable calls, like .render().el
		},

		unrender: function(){
			$(this.el).remove();
		},

		swap: function(){
			var swapped = {
				signature: this.model.get('name'),
				name: this.model.get('signature')
			};
			this.model.set(swapped);
			this.model.save();
		},

		remove: function(){
			this.model.destroy();
		}
	});

})(jQuery, window, Backbone);
