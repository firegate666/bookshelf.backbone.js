/*jslint browser: true*/
/*global jQuery, Backbone, _*/

(function($, app, Backbone, us) {
	'use strict';

	app.BookView = Backbone.View.extend({
		tagName : 'tr', // name of (orphan) root tag in this.el
		readOnly : true,

		events : {
			'click span.edit': 'renderEdit',
			'click span.save': 'updateModel',
			'click span.delete': 'remove'
		},

		initialize : function() {
			this.model.on('change', this.render, this);
			this.model.on('remove', this.unrender, this);
		},

		/**
		 * render this book view
		 */
		render : function() {
			if (this.readOnly) {
				return this.renderShow();
			}

			return this.renderEdit();
		},

		/**
		 * render read only mode
		 */
		renderShow : function() {
			var $el = this.$el,
				book = this.model;

			$el.html(us.template(app.TM.getTemplate('book'), {book : book}));

			us.each($el.find('td[data-attribute]'), function(td) {
				var $td = $(td),
					attribute = $td.data().attribute,
					itemLabelView = new app.BookLabelView({
						model: book,
						attribute: attribute
					});

				$td.html(itemLabelView.render().el);
			});

			return this;
		},

		/**
		 * render editable mode
		 */
		renderEdit : function(){
			this.readOnly = false;

			this.$el.html(us.template(app.TM.getTemplate('book_edit'), {book : this.model}));
			return this;
		},

		/**
		 * try to update and save model with new data
		 */
		updateModel : function() {
			var _self = this,
				$el = this.$el,
				form_data = {};

			us.each($el.find('input'), function(input) {
				var $input = $(input);
				form_data[$input.attr('name')] = $input.val();
			});

			this.model.save(form_data, {
				patch: true,
				wait: true,
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
			this.$el.remove();
		},

		/**
		 * delete model
		 */
		remove : function(){
			this.model.destroy();
		}
	});

}(jQuery, window, Backbone, _));
