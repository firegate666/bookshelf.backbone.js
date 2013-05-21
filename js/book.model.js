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
		},

		initialize: function() {
			this.on("invalid", function(model, error) {
			  alert(error);
			});
		},

		validate: function(attrs, options) {
			if (!attrs.signature || !attrs.name) {
				return 'enter proper name and signature';
			}
		}

	});

})(jQuery, window, Backbone);
