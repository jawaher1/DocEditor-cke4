/**
 * Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * Simple CKEditor Widget (Part 2).
 *
 * Created out of the CKEditor Widget SDK:
 * https://ckeditor.com/docs/ckeditor4/latest/guide/widget_sdk_tutorial_2.html
 */

// Register the plugin within the editor.
CKEDITOR.plugins.add( 'simplebox', {
	// This plugin requires the Widgets System defined in the 'widget' plugin.
	requires: 'widget',

	// Register the icon used for the toolbar button. It must be the same
	// as the name of the widget.
	icons: 'simplebox',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {
		// Register the editing dialog.
		CKEDITOR.dialog.add( 'simplebox', this.path + 'dialogs/simplebox.js' );

		// Register the simplebox widget.
		editor.widgets.add( 'simplebox', {
			// Allow all HTML elements, classes, and styles that this widget requires.
			// Read more about the Advanced Content Filter here:
			// * https://ckeditor.com/docs/ckeditor4/latest/guide/dev_advanced_content_filter.html
			// * https://ckeditor.com/docs/ckeditor4/latest/guide/plugin_sdk_integration_with_acf.html
			allowedContent:
				'div(!simplebox,align-left,align-right,align-center){width};' +
				'div(!simplebox-content); h2(!simplebox-title)',

			// Minimum HTML which is required by this widget to work.
			requiredContent: 'div(simplebox)',

			// Define two nested editable areas.
			editables: {
				title: {
					// Define CSS selector used for finding the element inside widget element.
					selector: '.simplebox-title',
					// Define content allowed in this nested editable. Its content will be
					// filtered accordingly and the toolbar will be adjusted when this editable
					// is focused.
					allowedContent: 'br strong em'
				},
				content: {
					selector: '.simplebox-content',
					allowedContent: 'p br ul ol li strong em'
				}
			},

			// Define the template of a new Simple Box widget.
			// The template will be used when creating new instances of the Simple Box widget.
			template:
				'<div class="simplebox">' +
					'<div class="lineChart" style="height: 220px; overflow: hidden;" data-highcharts-chart="0"><div id="highcharts-exleybv-0" dir="ltr" class="highcharts-container " style="position: relative; overflow: hidden; width: 359px; height: 220px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg version="1.1" class="highcharts-root" style="font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="359" height="220" viewBox="0 0 359 220"><desc>Created with Highcharts 7.1.1</desc><defs><clipPath id="highcharts-exleybv-1-"><rect x="0" y="0" width="310" height="142" fill="none"></rect></clipPath></defs><rect fill="#ffffff" class="highcharts-background" x="0" y="0" width="359" height="220" rx="0" ry="0"></rect><rect fill="none" class="highcharts-plot-background" x="39" y="10" width="310" height="142"></rect><g class="highcharts-grid highcharts-xaxis-grid" data-z-index="1"><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 90.5 10 L 90.5 152" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 141.5 10 L 141.5 152" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 193.5 10 L 193.5 152" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 245.5 10 L 245.5 152" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 296.5 10 L 296.5 152" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 348.5 10 L 348.5 152" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 38.5 10 L 38.5 152" opacity="1"></path></g><g class="highcharts-grid highcharts-yaxis-grid" data-z-index="1"><path fill="none" stroke="#e6e6e6" stroke-width="1" data-z-index="1" class="highcharts-grid-line" d="M 39 152.5 L 349 152.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" data-z-index="1" class="highcharts-grid-line" d="M 39 81.5 L 349 81.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" data-z-index="1" class="highcharts-grid-line" d="M 39 9.5 L 349 9.5" opacity="1"></path></g><rect fill="none" class="highcharts-plot-border" data-z-index="1" x="39" y="10" width="310" height="142"></rect><g class="highcharts-axis highcharts-xaxis" data-z-index="2"><path fill="none" class="highcharts-axis-line" stroke="#ccd6eb" stroke-width="1" data-z-index="7" d="M 39 152.5 L 349 152.5"></path></g><g class="highcharts-axis highcharts-yaxis" data-z-index="2"><path fill="none" class="highcharts-axis-line" data-z-index="7" d="M 39 10 L 39 152"></path></g><g class="highcharts-series-group" data-z-index="3"><g data-z-index="0.1" class="highcharts-series highcharts-series-0 highcharts-line-series highcharts-color-0     " transform="translate(39,10) scale(1 1)" clip-path="url(#highcharts-exleybv-1-)"><path fill="none" d="M 25.833333333333 62.125 L 77.5 55.025000000000006 L 129.16666666667 30.530000000000015 L 180.83333333333 75.61500000000001 L 232.5 133.835 L 284.16666666667 139.515" class="highcharts-graph" data-z-index="1" stroke="#7cb5ec" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 15.833333333333002 62.125 L 25.833333333333 62.125 L 77.5 55.025000000000006 L 129.16666666667 30.530000000000015 L 180.83333333333 75.61500000000001 L 232.5 133.835 L 284.16666666667 139.515 L 294.16666666667 139.515" visibility="visible" data-z-index="2" class="highcharts-tracker-line" stroke-linejoin="round" stroke="rgba(192,192,192,0.0001)" stroke-width="22"></path></g><g data-z-index="0.1" class="highcharts-markers highcharts-series-0 highcharts-line-series highcharts-color-0  highcharts-tracker    " transform="translate(39,10) scale(1 1)"><path fill="#7cb5ec" visibility="hidden" d="M 284 139.515 A 0 0 0 1 1 284 139.515 Z" class="highcharts-halo highcharts-color-0" data-z-index="-1" fill-opacity="0.25"></path><path fill="#7cb5ec" d="M 25 66.125 A 4 4 0 1 1 25.003999999333335 66.12499800000016 Z" opacity="1" class="highcharts-point highcharts-color-0 " stroke-width="0.000018751875738950985"></path><path fill="#7cb5ec" d="M 77 59.025000000000006 A 4 4 0 1 1 77.00399999933333 59.024998000000174 Z" opacity="1" class="highcharts-point highcharts-color-0  " stroke-width="0.0007383986093199013"></path><path fill="#7cb5ec" d="M 129 34.530000000000015 A 4 4 0 1 1 129.00399999933333 34.529998000000184 Z" opacity="1" class="highcharts-point highcharts-color-0  " stroke-width="0.000007312137235704341"></path><path fill="#7cb5ec" d="M 180 80 A 4 4 0 1 1 180.00399999933333 79.99999800000016 Z" opacity="1" class="highcharts-point highcharts-color-0"></path><path fill="#7cb5ec" d="M 232 137.835 A 4 4 0 1 1 232.00399999933333 137.83499800000018 Z" opacity="1" class="highcharts-point highcharts-color-0 " stroke-width="0.0000025574346958490146"></path><path fill="#7cb5ec" d="M 284 143.515 A 4 4 0 1 1 284.00399999933336 143.51499800000016 Z" opacity="1" class="highcharts-point highcharts-color-0  " stroke-width="0.0000024804436001037156"></path></g></g><text x="10" class="highcharts-title" data-z-index="4" style="color:#333333;font-size:18px;fill:#333333;" y="24"></text><text x="180" text-anchor="middle" class="highcharts-subtitle" data-z-index="4" style="color:#666666;fill:#666666;" y="24"></text><g class="highcharts-axis-labels highcharts-xaxis-labels" data-z-index="7"><text x="67.42605819768434" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 67.42605819768434 168)" y="168" opacity="1"><tspan>&lt;1 an</tspan></text><text x="119.09272486434735" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 119.09272486434735 168)" y="168" opacity="1"><tspan>1-3 ans</tspan></text><text x="170.75939153101734" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 170.75939153101734 168)" y="168" opacity="1"><tspan>3-5 ans</tspan></text><text x="222.42605819768735" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 222.42605819768735 168)" y="168" opacity="1"><tspan>5-7 ans</tspan></text><text x="274.09272486434736" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 274.09272486434736 168)" y="168" opacity="1"><tspan>7-10 ans</tspan></text><text x="325.75939153101734" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 325.75939153101734 168)" y="168" opacity="1"><tspan>&gt;10 ans</tspan></text></g><g class="highcharts-axis-labels highcharts-yaxis-labels" data-z-index="7"><text x="24" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="156" opacity="1">0</text><text x="24" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="85" opacity="1">20</text><text x="24" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="14" opacity="1">40</text></g><text x="349" class="highcharts-credits" text-anchor="end" data-z-index="8" style="cursor:pointer;color:#999999;font-size:9px;fill:#999999;" y="215">Highcharts.com</text><g class="highcharts-label highcharts-tooltip        highcharts-color-0" style="pointer-events:none;white-space:nowrap;" data-z-index="8" transform="translate(254,-9999)" opacity="0" visibility="visible"><path fill="none" class="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 101.5 0.5 C 104.5 0.5 104.5 0.5 104.5 3.5 L 104.5 44.5 C 104.5 47.5 104.5 47.5 101.5 47.5 L 74.5 47.5 68.5 53.5 62.5 47.5 3.5 47.5 C 0.5 47.5 0.5 47.5 0.5 44.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke="#000000" stroke-opacity="0.049999999999999996" stroke-width="5" transform="translate(1, 1)"></path><path fill="none" class="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 101.5 0.5 C 104.5 0.5 104.5 0.5 104.5 3.5 L 104.5 44.5 C 104.5 47.5 104.5 47.5 101.5 47.5 L 74.5 47.5 68.5 53.5 62.5 47.5 3.5 47.5 C 0.5 47.5 0.5 47.5 0.5 44.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke="#000000" stroke-opacity="0.09999999999999999" stroke-width="3" transform="translate(1, 1)"></path><path fill="none" class="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 101.5 0.5 C 104.5 0.5 104.5 0.5 104.5 3.5 L 104.5 44.5 C 104.5 47.5 104.5 47.5 101.5 47.5 L 74.5 47.5 68.5 53.5 62.5 47.5 3.5 47.5 C 0.5 47.5 0.5 47.5 0.5 44.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke="#000000" stroke-opacity="0.15" stroke-width="1" transform="translate(1, 1)"></path><path fill="rgba(247,247,247,0.85)" class="highcharts-label-box highcharts-tooltip-box" d="M 3.5 0.5 L 101.5 0.5 C 104.5 0.5 104.5 0.5 104.5 3.5 L 104.5 44.5 C 104.5 47.5 104.5 47.5 101.5 47.5 L 74.5 47.5 68.5 53.5 62.5 47.5 3.5 47.5 C 0.5 47.5 0.5 47.5 0.5 44.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke="#7cb5ec" stroke-width="1"></path><text x="8" data-z-index="1" style="font-size:12px;color:#333333;cursor:default;fill:#333333;" y="20"><tspan style="font-size: 10px">&gt;10 ans</tspan><tspan style="fill:#7cb5ec" x="8" dy="15">●</tspan><tspan dx="0"> Series 1: </tspan><tspan style="font-weight:bold" dx="0">0.7</tspan></text></g></svg></div></div>' +
				'</div>',

			// Define the label for a widget toolbar button which will be automatically
			// created by the Widgets System. This button will insert a new widget instance
			// created from the template defined above, or will edit selected widget
			// (see second part of this tutorial to learn about editing widgets).
			//
			// Note: In order to be able to translate your widget you should use the
			// editor.lang.simplebox.* property. A string was used directly here to simplify this tutorial.
			button: 'Create a simple box',

			// Set the widget dialog window name. This enables the automatic widget-dialog binding.
			// This dialog window will be opened when creating a new widget or editing an existing one.
			dialog: 'simplebox',

			// Check the elements that need to be converted to widgets.
			//
			// Note: The "element" argument is an instance of https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_htmlParser_element.html
			// so it is not a real DOM element yet. This is caused by the fact that upcasting is performed
			// during data processing which is done on DOM represented by JavaScript objects.
			upcast: function( element ) {
				// Return "true" (that element needs to converted to a Simple Box widget)
				// for all <div> elements with a "simplebox" class.
				return element.name == 'div' && element.hasClass( 'simplebox' );
			},

			// When a widget is being initialized, we need to read the data ("align" and "width")
			// from DOM and set it by using the widget.setData() method.
			// More code which needs to be executed when DOM is available may go here.
			init: function() {
				var width = this.element.getStyle( 'width' );
				if ( width )
					this.setData( 'width', width );

				if ( this.element.hasClass( 'align-left' ) )
					this.setData( 'align', 'left' );
				if ( this.element.hasClass( 'align-right' ) )
					this.setData( 'align', 'right' );
				if ( this.element.hasClass( 'align-center' ) )
					this.setData( 'align', 'center' );
			},

			// Listen on the widget#data event which is fired every time the widget data changes
			// and updates the widget's view.
			// Data may be changed by using the widget.setData() method, which we use in the
			// Simple Box dialog window.
			data: function() {
				// Check whether "width" widget data is set and remove or set "width" CSS style.
				// The style is set on widget main element (div.simplebox).
				if ( this.data.width == '' )
					this.element.removeStyle( 'width' );
				else
					this.element.setStyle( 'width', this.data.width );

				// Brutally remove all align classes and set a new one if "align" widget data is set.
				this.element.removeClass( 'align-left' );
				this.element.removeClass( 'align-right' );
				this.element.removeClass( 'align-center' );
				if ( this.data.align )
					this.element.addClass( 'align-' + this.data.align );
			}
		} );
	}
} );
