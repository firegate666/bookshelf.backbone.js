/*jslint browser: true*/
/*global jQuery, Backbone, _*/

(function($, app, Backbone, us) {
	'use strict';

	app.BookLabelView = Backbone.View.extend({
		tagName : 'span class="attribute"',
		attribute : '',
		readOnly : true,

		events : {
			'click' : 'renderEdit',
			'focusout' : 'updateModel',
			'keyup' : 'handleEnter'
		},

		initialize : function(options) {
			this.attribute = options.attribute;
			this.listenTo(this.model, 'change', this.render);
		},

		render : function() {
			var $el = this.$el,
				template_name = this.readOnly ? 'book_label' : 'book_label_edit';

			$el.html(us.template(app.TM.getTemplate(template_name), {
				book : this.model,
				attribute : this.attribute
			}));

			if (!this.readOnly) {
				$el.find('input').focus();
			}

			return this;
		},

		renderEdit : function() {
			if (this.readOnly) {
				this.readOnly = false;
				return this.render();
			}

			return this;
		},

		/**
		 * check if enter was pressed and trigger model update
		 *
		 * @param {Event} e
		 * @returns {void}
		 */
		handleEnter : function(e) {
			var code = e.which; // recommended to use e.which, it's normalized across browsers
			if (code === 13) {
				e.preventDefault();
				this.updateModel();
			}
		},

		/**
		 * update and save model attribute
		 *
		 * @returns {void}
		 */
		updateModel : function() {
			var _self = this,
				value = $(this.el).find('input').val(),
				form_data = {},
				cb_success = function() {
					_self.readOnly = true;
					_self.render();
				};


			if (this.model.get(this.attribute) !== value) {
				form_data[this.attribute] = value;
				this.model.save(form_data, {
					patch: true,
					wait: true,
					success: cb_success
				});
			} else {
				cb_success();
			}
		}

	});

}(jQuery, window, Backbone, _));
