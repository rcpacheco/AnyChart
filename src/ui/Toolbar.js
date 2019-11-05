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

  /**
   * Items with icons, succeptible to buttons mode change.
   * @type {anychart.ui.toolbarItems.MenuButton|goog.ui.ToolbarButton|anychart.ui.menu.Item|anychart.ui.menu.SubMenu>}
   */
  this.itemsWithIcons = [];

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
 * Add menuItem to menu or subMenu.
 * @param {anychart.ui.Toolbar|anychart.ui.menu.Menu|anychart.ui.menu.SubMenu} menu
 * @param {anychart.ui.menu.Item|goog.ui.MenuSeparator|anychart.ui.menu.SubMenu} item
 * @private
 */
anychart.ui.Toolbar.prototype.addItemToMenu_ = function(menu, item) {
  anychart.utils.instanceOf(menu, anychart.ui.menu.SubMenu) ? menu.addItem(item) : menu.addChild(item, true);
};


/**
 * Set icon to menu item.
 * @param {anychart.ui.menu.Item|anychart.ui.menu.SubMenu} item
 * @param {string=} opt_icon
 * @param {number=} opt_index
 * @private
 */
anychart.ui.Toolbar.prototype.setIconTo_ = function(item, opt_icon, opt_index) {
  var element = item.getElement();
  if (element) {
    var iconElement = goog.dom.getElementsByTagNameAndClass(goog.dom.TagName.I, null, element)[0];
    if (opt_icon) {
      if (iconElement) {
        goog.dom.classlist.set(iconElement, opt_icon);
        goog.style.setElementShown(iconElement, true);
      } else {
        iconElement = goog.dom.createDom(goog.dom.TagName.I, opt_icon);
        goog.a11y.aria.setState(iconElement, goog.a11y.aria.State.HIDDEN, true);
        goog.dom.insertChildAt(element, iconElement, opt_index || 0);
      }
    } else {
      if (iconElement) goog.style.setElementShown(iconElement, false);
    }
  }
};


/**
 * Recursively creates toolbar buttons, menus and submenus.
 * @param {anychart.ui.Toolbar|anychart.ui.menu.Menu|anychart.ui.menu.SubMenu} menu
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
    var hasIcon = !!itemData['iconClass'];
    var newItem;

    if (!itemData['text']) {
      // Separator.
      this.createSeparator_(menu);
    } else if (itemData['subMenu']) {
      // Sub menu. Might be anychart.ui.menu.Menu or anychart.ui.menu.SubMenu.
      this.createMenu_(menu, itemData);
    } else {
      // Menu item, or button.
      this.createButtonOrItem_(menu, itemData);
    }
  }

};


/**
 *
 * @param {} menu
 * @private
 */
anychart.ui.Toolbar.prototype.createSeparator_ = function(menu) {
  var separator;
  if (menu instanceof anychart.ui.Toolbar) {
    separator = new anychart.ui.toolbarItems.Separator();
  } else {
    separator = new goog.ui.MenuSeparator();
  }

  this.addItemToMenu_(menu, separator);
};


/**
 *
 * @param {anychart.ui.Toolbar|anychart.ui.menu.Menu|anychart.ui.menu.SubMenu} menu
 * @param model
 * @private
 */
anychart.ui.Toolbar.prototype.createButtonOrItem_ = function(menu, model) {
  var buttonOrItem;

  if (menu instanceof anychart.ui.Toolbar) {
    buttonOrItem = new goog.ui.ToolbarButton(model['text']);
  } else if (menu instanceof anychart.ui.menu.Menu || menu instanceof anychart.ui.menu.SubMenu) {
    buttonOrItem = new anychart.ui.menu.Item(model['text']);
  }

  buttonOrItem.setModel(model);
  this.addItemToMenu_(menu, buttonOrItem);
};


/**
 *
 * @param menu
 * @param model
 * @private
 */
anychart.ui.Toolbar.prototype.createMenu_ = function(menu, model) {
  var subMenu, menuButton;
  if (menu instanceof anychart.ui.Toolbar) {
    // Top level menus are MenuButtons with Menu attached to it.
    subMenu = new anychart.ui.menu.Menu(void 0, anychart.ui.menu.ToolbarMenuRenderer.getInstance());
    menuButton = new anychart.ui.toolbarItems.MenuButton(model['text'], subMenu);
  } else if (menu instanceof anychart.ui.menu.Menu || menu instanceof anychart.ui.menu.SubMenu) {
    // All other menus are just SubMenu's.
    subMenu = new anychart.ui.menu.SubMenu(model['text'], void 0, true);
  }

  this.makeToolbarMenus_(subMenu, model['subMenu']);
  this.addItemToMenu_(menu, menuButton || subMenu);
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
  this.setVisible(false);
};


/**
 * Hide toolbar.
 */
anychart.ui.Toolbar.prototype.hide = function() {
  this.setVisible(true);
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
