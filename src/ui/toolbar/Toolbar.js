goog.provide('anychart.ui.toolbar.Toolbar');

goog.require('anychart.core.reporting');
goog.require('goog.ui.Toolbar');

goog.forwardDeclare('anychart.core.Chart');

/**
 * Namespace anychart.ui.toolbar
 * @namespace
 * @name anychart.ui.toolbar
 */



/**
 * Anychart toolbar implementation.
 * @constructor
 * @extends {goog.ui.Toolbar}
 */
anychart.ui.toolbar.Toolbar = function() {
  anychart.ui.toolbar.Toolbar.base(this, 'constructor');

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
goog.inherits(anychart.ui.toolbar.Toolbar, goog.ui.Toolbar);


/**
 * Type declaration for text caption or DOM structure to be used as the content.
 * @typedef {string|Node|Array<Node>|NodeList}
 */
anychart.ui.toolbar.Toolbar.ControlContent;


/**
 * Gets/sets toolbar container.
 * @param {(string|Element)=} opt_element - Element ID or a DOM node.
 * @return {anychart.ui.toolbar.Toolbar|Element|undefined} - Current container or itself for method chaining.
 */
anychart.ui.toolbar.Toolbar.prototype.container = function(opt_element) {
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
 * @return {anychart.ui.toolbar.Toolbar|anychart.core.Chart|undefined} - Current target or itself for method chaining.
 */
anychart.ui.toolbar.Toolbar.prototype.target = function(opt_value) {
  if (goog.isDef(opt_value)) {
    this.targetChart_ = opt_value;
    return this;
  }
  return this.targetChart_;
};


/**
 * Draws toolbar.
 * @return {anychart.ui.toolbar.Toolbar} - Itself for method chaining.
 */
anychart.ui.toolbar.Toolbar.prototype.draw = function() {
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
 *  text: string,
 *  index: number,
 *  action: function,
 *  iconClass: string,
 *  subMenu: Object.<string, anychart.ui.toolbar.Toolbar.Item>,
 *  classNames: (string|Array.<string>)
 * }}
 */
anychart.ui.toolbar.Toolbar.Item;


/**
 * Context menu item comparison function.
 * @param {anychart.ui.toolbar.Toolbar.Item} item1 - .
 * @param {anychart.ui.toolbar.Toolbar.Item} item2 - .
 * @return {number}
 * @private
 */
anychart.ui.toolbar.Toolbar.prototype.itemSort_ = function(item1, item2) {
  if (!goog.isNumber(item1['index'])) return 1;
  if (!goog.isNumber(item2['index'])) return -1;
  return item1['index'] - item2['index'] || 1; //Avoid item replacement.
};


anychart.ui.toolbar.Toolbar.prototype.handleAction_ = function(e) {
  var item = e['target'];
  var itemModel = item.getModel();
  var actionContext = {
    'target': this.targetChart_,
    'item': itemModel
  };

  if (goog.isFunction(itemModel['action'])) {
    itemModel['action'].call(actionContext, actionContext);
  }
};

;


/**
 *
 * @param menu
 * @param model
 * @private
 */
anychart.ui.toolbar.Toolbar.prototype.makeToolbarMenus_ = function(menu, model) {
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
      this.addChild(new anychart.ui.toolbar.Separator(), true);
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
 * @param {Object.<string, anychart.ui.toolbar.Toolbar.Item>=} opt_value
 * @return {Object.<string, anychart.ui.toolbar.Toolbar.Item>}
 */
anychart.ui.toolbar.Toolbar.prototype.items = function(opt_value) {
  if (goog.isDef(opt_value)) {
    this.setModel(opt_value);
    this.removeChildren(true);
    this.makeToolbarMenus_(this, opt_value);
    return this;
  }
  return this.getModel();
};


anychart.ui.toolbar.Toolbar.prototype.show = function() {
  this.getElement()['style']['display'] = '';
};


anychart.ui.toolbar.Toolbar.prototype.hide = function() {
  this.getElement()['style']['display'] = 'none';
};


anychart.ui.toolbar.Toolbar.prototype.addClassName = function(className) {
  this.addClassName(className);
};


anychart.ui.toolbar.Toolbar.prototype.removeClassName = function(className) {
  this.removeClassName(className);
};


/**
 * Creates and returns new simple toolbar.
 * @return {anychart.ui.toolbar.Toolbar}
 */
anychart.ui.simpleToolbar = function() {
  return new anychart.ui.toolbar.Toolbar();
};

(function() {
  goog.exportSymbol('anychart.ui.simpleToolbar', anychart.ui.simpleToolbar);
  var proto = anychart.ui.toolbar.Toolbar.prototype;
  proto['draw'] = proto.draw;
  proto['target'] = proto.target;
})();
