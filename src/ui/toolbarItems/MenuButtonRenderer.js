goog.provide('anychart.ui.toolbarItems.MenuButtonRenderer');

goog.require('goog.ui.ToolbarMenuButtonRenderer');



/**
 * Anychart toolbar menu button renderer.
 * @constructor
 * @extends {goog.ui.ToolbarMenuButtonRenderer}
 */
anychart.ui.toolbarItems.MenuButtonRenderer = function() {
  anychart.ui.toolbarItems.MenuButtonRenderer.base(this, 'constructor');
};
goog.inherits(anychart.ui.toolbarItems.MenuButtonRenderer, goog.ui.ToolbarMenuButtonRenderer);
goog.addSingletonGetter(anychart.ui.toolbarItems.MenuButtonRenderer);


/**
 * Returns an appropriately-styled DIV containing a dropdown arrow element.
 * Creates the following DOM structure:
 *    <div class="anychart-inline-block anychart-menu-button-dropdown">
 *      &nbsp;
 *    </div>
 * @param {goog.dom.DomHelper} dom - DOM helper, used for document interaction.
 * @return {Element} - Dropdown element.
 */
anychart.ui.toolbarItems.MenuButtonRenderer.prototype.createDropdown = function(dom) {
  var element = dom.createDom(goog.dom.TagName.DIV,
      goog.ui.INLINE_BLOCK_CLASSNAME + ' ' +
      goog.getCssName(this.getCssClass(), 'dropdown'));

  // Don't use UTF-8.
  element.innerHTML = '&nbsp;';
  return element;
};
