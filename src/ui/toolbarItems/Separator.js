goog.provide('anychart.ui.toolbarItems.Separator');

goog.require('anychart.ui.toolbarItems.SeparatorRenderer');
goog.require('goog.ui.Separator');



/**
 * A separator control for a toolbar.
 *
 * @param {anychart.ui.toolbarItems.SeparatorRenderer=} opt_renderer Renderer to render or
 *    decorate the separator; defaults to
 *     {@link anychart.ui.toolbarItems.SeparatorRenderer}.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
 *    document interaction.
 * @constructor
 * @extends {goog.ui.Separator}
 * @final
 */
anychart.ui.toolbarItems.Separator = function(opt_renderer, opt_domHelper) {
  anychart.ui.toolbarItems.Separator.base(this, 'constructor', opt_renderer ||
      anychart.ui.toolbarItems.SeparatorRenderer.getInstance(), opt_domHelper);
};
goog.inherits(anychart.ui.toolbarItems.Separator, goog.ui.Separator);
