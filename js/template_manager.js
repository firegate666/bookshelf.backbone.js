/*jslint browser: true*/
/*global jQuery*/

(function($, app){
	'use strict';

	/**
	 * internal storage
	 *
	 * @var {string}
	 */
	var templates,
		TemplateManager;

	/**
	 * constructor
	 *
	 * @param {object} templates_arg list of templates
	 */
	TemplateManager = function(templates_arg) {
		templates = templates_arg || {};
	};

	/**
	 * add single template
	 *
	 * @param {string} name
	 * @param {string} content
	 * @return {TemplateManager}
	 */
	TemplateManager.prototype.addTemplate = function(name, content) {
		templates[name] = content;
		return this;
	};

	/**
	 * add multiple templates at once
	 *
	 * @param {string} match jquery match to identify the single templates
	 * @param {string} content templates
	 * @return {TemplateManager}
	 */
	TemplateManager.prototype.addTemplates = function(match, content) {
		// temp add to page to allow jquery to operate on it
		$(content).appendTo('body').wrapAll('<div id="templates" />');

		// extract templates and add to store
		$(match, $('body')).each(function() {
			templates[$(this).attr('id')] = $(this).html();
		});

		// clean up
		$('#templates').remove();

		return this;
	};

	/**
	 * get template
	 *
	 * @param {string} name
	 * @return {string}
	 */
	TemplateManager.prototype.getTemplate = function(name) {
		return templates[name];
	};

	app.TemplateManager = TemplateManager;

}(jQuery, window));
