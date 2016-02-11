goog.provide('anychart.core.axisMarkers.TextBase');

goog.require('acgraph.math.Coordinate');
goog.require('anychart.core.Text');
goog.require('anychart.core.utils.Padding');
goog.require('anychart.enums');
goog.require('anychart.utils');
goog.require('goog.math');



/**
 * Text marker base.
 * @constructor
 * @extends {anychart.core.Text}
 */
anychart.core.axisMarkers.TextBase = function() {
  anychart.core.axisMarkers.TextBase.base(this, 'constructor');

  /**
   * Current value.
   * @type {*}
   * @protected
   */
  this.val;

  /**
   * Current scale.
   * @type {anychart.scales.Base|anychart.scales.GanttDateTime}
   * @private
   */
  this.scale_;

  /**
   * Marker element.
   * @type {acgraph.vector.Text} - Marker text element.
   * @private
   */
  this.markerElement_;

  /**
   * @type {?number}
   * @private
   */
  this.rotation_ = null;

  /**
   * @type {anychart.enums.Align}
   * @private
   */
  this.align_;

  /**
   * @type {anychart.enums.Anchor}
   * @private
   */
  this.anchor_;

  /**
   * @type {string|number}
   * @private
   */
  this.offsetX_;

  /**
   * @type {string|number}
   * @private
   */
  this.offsetY_;

  /**
   * @type {?(string|number)}
   * @private
   */
  this.width_ = null;

  /**
   * @type {?(string|number)}
   * @private
   */
  this.height_ = null;

};
goog.inherits(anychart.core.axisMarkers.TextBase, anychart.core.Text);


//----------------------------------------------------------------------------------------------------------------------
//  States and signals.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Supported signals.
 * @type {number}
 */
anychart.core.axisMarkers.TextBase.prototype.SUPPORTED_SIGNALS =
    anychart.core.Text.prototype.SUPPORTED_SIGNALS;


/**
 * Supported consistency states.
 * @type {number}
 */
anychart.core.axisMarkers.TextBase.prototype.SUPPORTED_CONSISTENCY_STATES =
    anychart.core.Text.prototype.SUPPORTED_CONSISTENCY_STATES |
    anychart.ConsistencyState.APPEARANCE |
    anychart.ConsistencyState.BOUNDS;


/**
 * Getter/setter for default scale.
 * Works with instances of anychart.scales.Base only.
 * @param {(anychart.scales.Base|anychart.scales.GanttDateTime)=} opt_value - Scale.
 * @return {anychart.scales.Base|anychart.scales.GanttDateTime|!anychart.core.axisMarkers.TextBase} - Axis scale or
 * itself for method chaining.
 */
anychart.core.axisMarkers.TextBase.prototype.scaleInternal = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.scale_ != opt_value) {
      if (this.scale_)
        this.scale_.unlistenSignals(this.scaleInvalidated, this);
      this.scale_ = opt_value;
      this.scale_.listenSignals(this.scaleInvalidated, this);
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  } else {
    return /** @type {anychart.scales.Base} */ (this.scale_);
  }
};


/**
 * Scale invalidation handler.
 * @param {anychart.SignalEvent} event - Event object.
 * @protected
 */
anychart.core.axisMarkers.TextBase.prototype.scaleInvalidated = function(event) {
  var signal = 0;
  if (event.hasSignal(anychart.Signal.NEEDS_RECALCULATION))
    signal |= anychart.Signal.NEEDS_RECALCULATION;
  if (event.hasSignal(anychart.Signal.NEEDS_REAPPLICATION))
    signal |= anychart.Signal.NEEDS_REDRAW;

  signal |= anychart.Signal.BOUNDS_CHANGED;

  this.invalidate(anychart.ConsistencyState.BOUNDS, signal);
};


//----------------------------------------------------------------------------------------------------------------------
//  Bounds.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Axes lines space.
 * @param {(string|number|anychart.core.utils.Space)=} opt_spaceOrTopOrTopAndBottom Space object or top or top and bottom
 *    space.
 * @param {(string|number)=} opt_rightOrRightAndLeft Right or right and left space.
 * @param {(string|number)=} opt_bottom Bottom space.
 * @param {(string|number)=} opt_left Left space.
 * @return {!(anychart.core.VisualBase|anychart.core.utils.Padding)} .
 */
anychart.core.axisMarkers.TextBase.prototype.axesLinesSpace = function(opt_spaceOrTopOrTopAndBottom, opt_rightOrRightAndLeft, opt_bottom, opt_left) {
  if (!this.axesLinesSpace_) {
    this.axesLinesSpace_ = new anychart.core.utils.Padding();
    this.registerDisposable(this.axesLinesSpace_);
  }

  if (goog.isDef(opt_spaceOrTopOrTopAndBottom)) {
    this.axesLinesSpace_.setup.apply(this.axesLinesSpace_, arguments);
    return this;
  } else {
    return this.axesLinesSpace_;
  }
};


/**
 * Whether marker is horizontal
 * @return {boolean} - If the marker is horizontal.
 */
anychart.core.axisMarkers.TextBase.prototype.isHorizontal = function() {
  return this.layout() == anychart.enums.Layout.HORIZONTAL;
};


//----------------------------------------------------------------------------------------------------------------------
//  Layout.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Get/Set align.
 * @param {anychart.enums.Align=} opt_value TextMarker align.
 * @return {anychart.enums.Align|anychart.core.axisMarkers.TextBase} Align or this.
 */
anychart.core.axisMarkers.TextBase.prototype.align = function(opt_value) {
  if (goog.isDef(opt_value)) {
    var align = anychart.enums.normalizeAlign(opt_value);
    if (this.align_ != align) {
      this.align_ = align;
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  } else {
    return this.align_;
  }
};


/**
 * Get/set line marker layout.
 * @param {anychart.enums.Layout=} opt_value - LineMarker layout.
 * @return {anychart.enums.Layout|anychart.core.axisMarkers.TextBase} - Layout or this.
 */
anychart.core.axisMarkers.TextBase.prototype.layout = goog.abstractMethod;


/**
 * Get/set rotation in degrees.
 * If null is provided then rotation angle depends on layout: vertical = -90 degrees; horizontal = 0 degrees.
 * @param {?number=} opt_value rotation.
 * @return {null|number|anychart.core.axisMarkers.TextBase} Rotation or self for chaining.
 */
anychart.core.axisMarkers.TextBase.prototype.rotation = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.rotation_ != opt_value) {
      this.rotation_ = opt_value;
      this.invalidate(anychart.ConsistencyState.BOUNDS, anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  }
  return this.rotation_;
};


/**
 * Get/set text marker anchor settings.
 * @param {(anychart.enums.Anchor|string)=} opt_value Text marker anchor settings.
 * @return {anychart.core.axisMarkers.TextBase|anychart.enums.Anchor} Text marker anchor settings or itself for method chaining.
 */
anychart.core.axisMarkers.TextBase.prototype.anchor = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = anychart.enums.normalizeAnchor(opt_value);
    if (this.anchor_ != opt_value) {
      this.anchor_ = opt_value;
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  } else {
    return this.anchor_;
  }
};


//----------------------------------------------------------------------------------------------------------------------
//  Settings.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Get/Set text marker settings.
 * @param {(string)=} opt_value TextMarker text settings.
 * @return {string|anychart.core.axisMarkers.TextBase} TextMarker line settings or TextMarker instance for method chaining.
 */
anychart.core.axisMarkers.TextBase.prototype.text = function(opt_value) {
  return /** @type {anychart.core.axisMarkers.TextBase|string} */(this.textSettings('text', opt_value));
};


/**
 * Getter/setter for scale.
 * @param {*=} opt_value - Value to be set.
 * @return {*} - Current value or itself for method chaining.
 */
anychart.core.axisMarkers.TextBase.prototype.valueInternal = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.val !== opt_value) {
      this.val = opt_value;
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  }
  return this.val;
};


/**
 * Get/set offset x.
 * @param {(number|string)=} opt_newValue TextMarker value settings.
 * @return {number|string|anychart.core.axisMarkers.TextBase} TextMarker value settings or TextMarker instance for method chaining.
 */
anychart.core.axisMarkers.TextBase.prototype.offsetX = function(opt_newValue) {
  if (goog.isDef(opt_newValue)) {
    if (this.offsetX_ != opt_newValue) {
      this.offsetX_ = opt_newValue;
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  } else {
    return this.offsetX_;
  }
};


/**
 * Get/set offset y.
 * @param {(number|string)=} opt_newValue TextMarker value settings.
 * @return {number|string|anychart.core.axisMarkers.TextBase} TextMarker value settings or TextMarker instance for method chaining.
 */
anychart.core.axisMarkers.TextBase.prototype.offsetY = function(opt_newValue) {
  if (goog.isDef(opt_newValue)) {
    if (this.offsetY_ != opt_newValue) {
      this.offsetY_ = opt_newValue;
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  } else {
    return this.offsetY_;
  }
};


/**
 * Getter/setter for width.
 * @param {(number|string|null)=} opt_value .
 * @return {!anychart.core.axisMarkers.TextBase|number|string|null} .
 */
anychart.core.axisMarkers.TextBase.prototype.width = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.width_ != opt_value) {
      this.width_ = opt_value;
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  }
  return this.width_;
};


/**
 * Getter/setter for height.
 * @param {(number|string|null)=} opt_value .
 * @return {!anychart.core.axisMarkers.TextBase|number|string|null} .
 */
anychart.core.axisMarkers.TextBase.prototype.height = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.height_ != opt_value) {
      this.height_ = opt_value;
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  }
  return this.height_;
};


/** @inheritDoc */
anychart.core.axisMarkers.TextBase.prototype.applyTextSettings = function(textElement, isInitial) {
  if (isInitial || 'text' in this.changedSettings || 'useHtml' in this.changedSettings) {
    if (!!this.settingsObj['useHtml'])
      textElement.htmlText(this.settingsObj['text']);
    else
      textElement.text(this.settingsObj['text']);
  }
  goog.base(this, 'applyTextSettings', textElement, isInitial);
  this.changedSettings = {};
};


//----------------------------------------------------------------------------------------------------------------------
//  Drawing.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Drawing.
 * @return {anychart.core.axisMarkers.TextBase} An instance of {@link anychart.core.axisMarkers.Text} class for method chaining.
 */
anychart.core.axisMarkers.TextBase.prototype.draw = function() {
  if (!this.scale_) {
    anychart.utils.error(anychart.enums.ErrorCode.SCALE_NOT_SET);
    return this;
  }

  if (!this.checkDrawingNeeded())
    return this;

  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {
    this.applyTextSettings(this.markerElement(), true);
    this.markConsistent(anychart.ConsistencyState.APPEARANCE);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.Z_INDEX)) {
    var zIndex = /** @type {number} */(this.zIndex());
    this.markerElement().zIndex(zIndex);
    this.markConsistent(anychart.ConsistencyState.Z_INDEX);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.BOUNDS)) {
    var ratio = this.scale_.transform(this.val, 0.5);
    if (isNaN(ratio)) return this;

    var textElement = this.markerElement();

    if (ratio >= 0 && ratio <= 1) {
      var shift = -.5;

      var parentBounds = /** @type {anychart.math.Rect} */(this.parentBounds());
      parentBounds = parentBounds.clone().round();
      var anchor = /** @type {anychart.enums.Anchor} */(this.anchor());

      textElement.setTransformationMatrix(1, 0, 0, 1, 0, 0);
      textElement.width(null);
      textElement.height(null);

      var isWidthSet = !goog.isNull(this.width());
      var isHeightSet = !goog.isNull(this.height());

      var textElementBounds = textElement.getBounds();

      var width = isWidthSet ?
          Math.ceil(anychart.utils.normalizeSize(/** @type {number|string} */(this.width()), parentBounds.width)) :
          textElementBounds.width;
      if (isWidthSet) textElement.width(width);

      textElementBounds = textElement.getBounds();

      var height = isHeightSet ?
          Math.ceil(anychart.utils.normalizeSize(/** @type {number|string} */(this.height()), parentBounds.height)) :
          textElementBounds.height;
      if (isHeightSet) textElement.height(height);

      var position = /** @type {acgraph.math.Coordinate}*/(this.getTextPosition_(ratio, shift));

      var angle = anychart.utils.toNumber(this.rotation_);
      var rotation = isNaN(angle) ?
          this.isHorizontal() ?
              0 : -90 :
          angle;

      var transform = goog.graphics.AffineTransform.getRotateInstance(goog.math.toRadians(rotation), 0, 0);
      var rotatedBounds = acgraph.math.getBoundsOfRectWithTransform(textElementBounds, transform);

      var anchorCoordinate = anychart.utils.getCoordinateByAnchor(
          anychart.math.rect(0, 0, rotatedBounds.width, rotatedBounds.height),
          anchor);

      position.x -= anchorCoordinate.x;
      position.y -= anchorCoordinate.y;

      var offsetX = anychart.utils.normalizeSize(/** @type {number|string} */(this.offsetX()), width);
      var offsetY = anychart.utils.normalizeSize(/** @type {number|string} */(this.offsetY()), height);

      anychart.utils.applyOffsetByAnchor(position, anchor, offsetX, offsetY);
      this.applyTextSettings(textElement, true);

      textElement
          .x(position.x + rotatedBounds.width / 2 - width / 2)
          .y(position.y + rotatedBounds.height / 2 - height / 2)
          .setRotationByAnchor(rotation, acgraph.vector.Anchor.CENTER);

      this.invalidate(anychart.ConsistencyState.CONTAINER);
    } else {
      this.remove();
      this.markConsistent(anychart.ConsistencyState.CONTAINER);
    }

    this.markConsistent(anychart.ConsistencyState.BOUNDS);
  }


  if (this.hasInvalidationState(anychart.ConsistencyState.CONTAINER)) {
    var container = /** @type {acgraph.vector.ILayer} */(this.container());
    this.markerElement().parent(container);
    this.markConsistent(anychart.ConsistencyState.CONTAINER);
  }

  return this;
};


/**
 * Calculates text position using layout and align.
 * @param {number} ratio Scale ratio.
 * @param {number} shift Pixel shift.
 * @return {anychart.math.Coordinate} text position.
 * @private
 */
anychart.core.axisMarkers.TextBase.prototype.getTextPosition_ = function(ratio, shift) {
  var x, y;
  var parentBounds = this.parentBounds();
  parentBounds = parentBounds.clone().round();
  switch (this.layout()) {
    default:
    case anychart.enums.Layout.HORIZONTAL:
      y = Math.round(parentBounds.getTop() + parentBounds.height - (ratio * parentBounds.height));
      ratio == 1 ? y -= shift : y += shift;
      switch (this.align_) {
        case anychart.enums.Align.LEFT:
          x = parentBounds.getLeft();
          break;
        case anychart.enums.Align.RIGHT:
          x = parentBounds.getRight();
          break;
        default: // TOP CENTER BOTTOM
          x = parentBounds.getLeft() + parentBounds.width / 2;
          break;
      }
      break;
    case anychart.enums.Layout.VERTICAL:
      x = Math.round(parentBounds.getLeft() + ratio * parentBounds.width);
      ratio == 1 ? x += shift : x -= shift;
      switch (this.align_) {
        case anychart.enums.Align.TOP:
          y = parentBounds.getTop();
          break;
        case anychart.enums.Align.BOTTOM:
          y = parentBounds.getBottom();
          break;
        default: // LEFT CENTER RIGHT
          y = parentBounds.getTop() + parentBounds.height / 2;
          break;
      }
      break;
  }
  return new acgraph.math.Coordinate(x, y);
};


//----------------------------------------------------------------------------------------------------------------------
//  Disabling & enabling.
//----------------------------------------------------------------------------------------------------------------------
/** @inheritDoc */
anychart.core.axisMarkers.TextBase.prototype.remove = function() {
  this.markerElement().parent(null);
};


//----------------------------------------------------------------------------------------------------------------------
//  Elements creation.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Create marker element.
 * @return {!acgraph.vector.Text} AxisMarker line element.
 * @protected
 */
anychart.core.axisMarkers.TextBase.prototype.markerElement = function() {
  if (!this.markerElement_) {
    this.markerElement_ = acgraph.text();
    this.registerDisposable(this.markerElement_);
  }
  return this.markerElement_;
};


//----------------------------------------------------------------------------------------------------------------------
//  Disposing.
//----------------------------------------------------------------------------------------------------------------------
/** @inheritDoc */
anychart.core.axisMarkers.TextBase.prototype.disposeInternal = function() {
  goog.dispose(this.markerElement_);
  this.markerElement_ = null;
  goog.base(this, 'disposeInternal');
};


/** @inheritDoc */
anychart.core.axisMarkers.TextBase.prototype.serialize = function() {
  var json = goog.base(this, 'serialize');
  json['anchor'] = this.anchor();
  json['align'] = this.align();
  json['layout'] = this.layout();
  json['rotation'] = this.rotation();
  json['offsetX'] = this.offsetX();
  json['offsetY'] = this.offsetY();
  json['text'] = this.text();
  json['height'] = this.height();
  json['width'] = this.width();
  return json;
};


/** @inheritDoc */
anychart.core.axisMarkers.TextBase.prototype.setupByJSON = function(config) {
  goog.base(this, 'setupByJSON', config);
  this.anchor(config['anchor']);
  this.align(config['align']);
  this.layout(config['layout']);
  this.rotation(config['rotation']);
  this.offsetX(config['offsetX']);
  this.offsetY(config['offsetY']);
  this.text(config['text']);
  this.height(config['height']);
  this.width(config['width']);
};
