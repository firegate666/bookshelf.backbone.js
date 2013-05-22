(function($, app, Backbone){

	app.BookView = Backbone.View.extend({
		tagName : 'tr', // name of (orphan) root tag in this.el
		readOnly : true,

		events : {
			'click span.edit': 'renderEdit',
			'click span.save': 'updateModel',
			'click span.delete': 'remove'
		},

		initialize : function() {
			_.bindAll(this, 'render', 'renderShow', 'renderEdit', 'unrender', 'remove'); // every function that uses 'this' as the current object should be in here

			this.model.bind('change', this.render);
			this.model.bind('remove', this.unrender);
		},

		/**
		 * render this book view
		 */
		render : function() {
			if (this.readOnly) {
				return this.renderShow();
			} else {
				return this.renderEdit();
			}
		},

		/**
		 * render read only mode
		 */
		renderShow : function(){
			$(this.el).html(_.template(TM.getTemplate('book'), {book : this.model}));
			return this;
		},

		/**
		 * render editable mode
		 */
		renderEdit : function(){
			this.readOnly = false;

			$(this.el).html(_.template(TM.getTemplate('book_edit'), {book : this.model}));
			return this;
		},

		/**
		 * try to update and save model with new data
		 */
		updateModel : function() {
			var _self = this,
				$el = $(this.el),
				form_data = {};

			$el.find('input').each(function(k, input) {
				var $input = $(input);
				form_data[$input.attr('name')] = $input.val();
			});

			this.model.save(form_data, {
				success: function() {
					_self.readOnly = true;
					_self.render();
				}
			});
		},

		/**
		 * unrender row
		 */
		unrender : function(){
			$(this.el).remove();
		},

		/**
		 * delete model
		 */
		remove : function(){
			this.model.destroy();
		}
	});

})(jQuery, window, Backbone);
