//region --- Requiring and Providing
goog.provide('anychart.core.utils.MarkersFactory');
goog.require('anychart.core.Marker');
goog.require('anychart.core.utils.Factory');
//endregion



/**
 * Class for creation of sets of similar markers and management of such sets.
 * Any individual label can be changed after all labels are displayed.
 * @param {function():anychart.core.IFactoryElement=} opt_ctor .
 * @param {boolean=} opt_isNonInteractive .
 * @constructor
 * @extends {anychart.core.utils.Factory}
 */
anychart.core.utils.MarkersFactory = function(opt_ctor, opt_isNonInteractive) {
  anychart.core.utils.MarkersFactory.base(
      this,
      'constructor',
      opt_ctor || anychart.core.utils.MarkersFactory.DEFAULT_CONSTRUCTOR);

  /**
   * If the factory is allowed to listen and intercept events.
   * @type {boolean}
   */
  this.isInteractive = !opt_isNonInteractive;
};
goog.inherits(anychart.core.utils.MarkersFactory, anychart.core.utils.Factory);


//region --- Static props
/**
 * Default markers constructor.
 * @return {anychart.core.Marker}
 */
anychart.core.utils.MarkersFactory.DEFAULT_CONSTRUCTOR = function() {
  return new anychart.core.Marker();
};


//endregion
//region --- Dom elements
/** @inheritDoc */
anychart.core.utils.MarkersFactory.prototype.getRootLayer = function() {
  if (!this.layer) {
    this.layer = acgraph.layer();
    if (this.isInteractive)
      this.bindHandlersToGraphics(this.layer);
  }
  return this.layer;
};


//endregion
//region --- Interactivity
//----------------------------------------------------------------------------------------------------------------------
//
//  Events
//
//----------------------------------------------------------------------------------------------------------------------
/** @inheritDoc */
anychart.core.utils.MarkersFactory.prototype.makeBrowserEvent = function(e) {
  var res = anychart.core.utils.Factory.base(this, 'makeBrowserEvent', e);
  var target = res['domTarget'];
  var tag;
  while (anychart.utils.instanceOf(target, acgraph.vector.Element)) {
    tag = target.tag;
    if (anychart.utils.instanceOf(tag, anychart.core.VisualBase) || !anychart.utils.isNaN(tag))
      break;
    target = target.parent();
  }
  res['markerIndex'] = anychart.utils.toNumber(tag);
  return res;
};


//endregion
