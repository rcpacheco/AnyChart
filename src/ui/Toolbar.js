goog.provide('anychart.ui.Toolbar');

goog.require('anychart.core.reporting');
goog.require('anychart.ui.toolbarItems.Separator');
goog.require('goog.ui.Toolbar');
goog.require('goog.ui.ToolbarButton');

goog.forwardDeclare('anychart.core.Chart');



/**
 * Anychart toolbar implementation.
 * @constructor
 * @extends {goog.ui.Toolbar}
 */
anychart.ui.Toolbar = function() {
  anychart.ui.Toolbar.base(this, 'constructor');

  /**
   * Container.
   * @type {Element|undefined}
   */
  this.container_;

  /**
   * Controlled chart.
   * @type {anychart.core.Chart}
   */
  this.targetChart_;

  /**
   * Toolbar items.
   * @type {Array.<Object>}
   */
  this.items_;

  /**
   * @type {Array.<goog.ui.Component>}
   */
  this.itemsComponents_;

  this.listen(goog.ui.Component.EventType.ACTION, this.handleAction_);
};
goog.inherits(anychart.ui.Toolbar, goog.ui.Toolbar);


/**
 * Type declaration for text caption or DOM structure to be used as the content.
 * @typedef {string|Node|Array<Node>|NodeList}
 */
anychart.ui.Toolbar.ControlContent;


/**
 * Gets/sets toolbar container.
 * @param {(string|Element)=} opt_element - Element ID or a DOM node.
 * @return {anychart.ui.Toolbar|Element|undefined} - Current container or itself for method chaining.
 */
anychart.ui.Toolbar.prototype.container = function(opt_element) {
  if (goog.isDef(opt_element)) {
    var newContainer = goog.dom.getElement(opt_element);
    if (this.container_ != newContainer) {
      this.exitDocument();
      this.container_ = newContainer;
      this.draw();
    }
    return this;
  }
  return this.container_;
};


/**
 * Gets/sets controlled chart.
 * @param {anychart.core.Chart=} opt_value - Target chart.
 * @return {anychart.ui.Toolbar|anychart.core.Chart|undefined} - Current target or itself for method chaining.
 */
anychart.ui.Toolbar.prototype.target = function(opt_value) {
  if (goog.isDef(opt_value)) {
    this.targetChart_ = opt_value;
    return this;
  }
  return this.targetChart_;
};


/**
 * Draws toolbar.
 * @return {anychart.ui.Toolbar} - Itself for method chaining.
 */
anychart.ui.Toolbar.prototype.draw = function() {
  if (this.container_) {
    if (this.container_.firstChild) {
      this.renderBefore(this.container_.firstChild);
    } else {
      this.render(this.container_);
    }
  } else {
    anychart.core.reporting.warning(anychart.enums.WarningCode.TOOLBAR_CONTAINER);
  }
  return this;
};


/**
 * @typedef {{
 *  item: anychart.ui.Toolbar.Item,
 *  chart: (anychart.core.Chart|undefined)
 * }}
 */
anychart.ui.Toolbar.ActionContext;


/**
 * @typedef {{
 *  text: string,
 *  index: number,
 *  action: function(this: anychart.ui.Toolbar.ActionContext, anychart.ui.Toolbar.ActionContext),
 *  iconClass: string,
 *  subMenu: Object.<string, anychart.ui.Toolbar.Item>,
 *  classNames: (string|Array.<string>)
 * }}
 */
anychart.ui.Toolbar.Item;


/**
 * Context menu item comparison function.
 * @param {anychart.ui.Toolbar.Item} item1 - .
 * @param {anychart.ui.Toolbar.Item} item2 - .
 * @return {number}
 * @private
 */
anychart.ui.Toolbar.prototype.itemSort_ = function(item1, item2) {
  if (!goog.isNumber(item1['index'])) return 1;
  if (!goog.isNumber(item2['index'])) return -1;
  return item1['index'] - item2['index'] || 1; //Avoid item replacement.
};


/**
 * Toolbar action handler.
 * @param {goog.events.Event} e
 * @private
 */
anychart.ui.Toolbar.prototype.handleAction_ = function(e) {
  var item = e['target'];
  var itemModel = item.getModel();
  var actionContext = {
    'chart': this.targetChart_,
    'item': itemModel
  };

  if (goog.isFunction(itemModel['action'])) {
    itemModel['action'].call(actionContext, actionContext);
  }
};


/**
 * Recursively creates toolbar buttons, menus and submenus.
 * @param {anychart.ui.Toolbar|anychart.ui.toolbarItems.MenuButton|anychart.ui.menu.Menu} menu
 * @param {Object.<string, anychart.ui.Toolbar.Item>} model
 * @private
 */
anychart.ui.Toolbar.prototype.makeToolbarMenus_ = function(menu, model) {
  var sortedModel = [];

  for (var key in model) {
    var modelItem = model[key];
    if (model.hasOwnProperty(key)) {
      goog.array.binaryInsert(sortedModel, modelItem, this.itemSort_);
    }
  }

  for (var i = 0; i < sortedModel.length; i++) {
    var itemData = sortedModel[i];

    if (!itemData['text']) {
      // Separator.
      this.addChild(new anychart.ui.toolbarItems.Separator(), true);
    } else if (itemData['subMenu']) {
      // Sub menu. Might be anychart.ui.menu.Menu or anychart.ui.menu.SubMenu.

    } else {
      // Menu item, or button.
      var button = new goog.ui.ToolbarButton(itemData['text']);
      button.setModel(itemData);
      this.addChild(button, true);
    }
  }

};


/**
 *
 * @param {Object.<string, anychart.ui.Toolbar.Item>=} opt_value
 * @return {Object.<string, anychart.ui.Toolbar.Item>}
 */
anychart.ui.Toolbar.prototype.items = function(opt_value) {
  if (goog.isDef(opt_value)) {
    this.setModel(opt_value);
    this.removeChildren(true);
    this.makeToolbarMenus_(this, opt_value);
    return this;
  }
  return /** @type {Object.<string, anychart.ui.Toolbar.Item>}*/(this.getModel());
};


/**
 * Show toolbar.
 */
anychart.ui.Toolbar.prototype.show = function() {
  this.getElement()['style']['display'] = '';
};


/**
 * Hide toolbar.
 */
anychart.ui.Toolbar.prototype.hide = function() {
  this.getElement()['style']['display'] = 'none';
};


/**
 * Add class name to toolbar element.
 * @param {string} className
 */
anychart.ui.Toolbar.prototype.addClassName = function(className) {
  this.addClassName(className);
};


/**
 * Remove class name from toolbar element.
 * @param {string} className
 */
anychart.ui.Toolbar.prototype.removeClassName = function(className) {
  this.removeClassName(className);
};


/**
 * Creates and returns new simple toolbar.
 * @return {anychart.ui.Toolbar}
 */
anychart.ui.toolbar = function() {
  return new anychart.ui.Toolbar();
};

(function() {
  goog.exportSymbol('anychart.ui.toolbar', anychart.ui.toolbar);
  var proto = anychart.ui.Toolbar.prototype;
  proto['draw'] = proto.draw;
  proto['target'] = proto.target;
  proto['items'] = proto.items;
  proto['show'] = proto.show;
  proto['hide'] = proto.hide;
})();
