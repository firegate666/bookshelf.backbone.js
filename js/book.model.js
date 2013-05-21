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
			signature: 'SIG-',
			name: 'My Book',
			created_at: null,
			changed_at: null
		}

	});

})(jQuery, window, Backbone);
