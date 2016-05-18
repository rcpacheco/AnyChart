goog.provide('anychart.core.stock.Grouping');
goog.require('anychart.core.Base');
goog.require('anychart.core.utils.DateTimeIntervalGenerator');
goog.require('anychart.enums');
goog.require('goog.array');



/**
 * Grouping settings class.
 * @constructor
 * @extends {anychart.core.Base}
 */
anychart.core.stock.Grouping = function() {
  anychart.core.stock.Grouping.base(this, 'constructor');

  /**
   * Enabled state.
   * @type {boolean}
   * @private
   */
  this.enabled_ = true;

  /**
   * Forced grouping mode.
   * @type {boolean}
   * @private
   */
  this.forced_ = false;

  /**
   * Ranges list.
   * @type {!Array.<!anychart.core.utils.DateTimeIntervalGenerator>}
   * @private
   */
  this.intervals_ = [];

  /**
   * Max points per screen.
   * @type {number}
   * @private
   */
  this.maxPoints_ = 500;

  /**
   * Min pixels per point
   * @type {number}
   * @private
   */
  this.minPixels_ = NaN;

  // /**
  //  * X determining mode.
  //  * @type {anychart.enums.XGroupingMode|Function}
  //  * @private
  //  */
  // this.xMode_ = anychart.enums.XGroupingMode.FIRST;

  /**
   * @type {!anychart.core.stock.Grouping.Level}
   * @private
   */
  this.currentInterval_ = {'unit': anychart.enums.Interval.MILLISECOND, 'count': 1};

  /**
   * @type {boolean}
   * @private
   */
  this.isGrouped_ = false;
};
goog.inherits(anychart.core.stock.Grouping, anychart.core.Base);


/**
 * @typedef {{
 *   unit: anychart.enums.Interval,
 *   count: number
 * }}
 */
anychart.core.stock.Grouping.Level;


/**
 * Supported signals.
 * @type {number}
 */
anychart.core.stock.Grouping.prototype.SUPPORTED_SIGNALS = anychart.Signal.NEEDS_REAPPLICATION;


/**
 * If the grouping is enabled.
 * @param {boolean=} opt_value
 * @return {anychart.core.stock.Grouping|boolean}
 */
anychart.core.stock.Grouping.prototype.enabled = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = !!opt_value;
    if (this.enabled_ != opt_value) {
      this.enabled_ = opt_value;
      this.dispatchSignal(anychart.Signal.NEEDS_REAPPLICATION);
    }
    return this;
  }
  return this.enabled_;
};


/**
 * Getter/setter for forced grouping setting.
 * @param {boolean=} opt_value
 * @return {anychart.core.stock.Grouping|boolean}
 */
anychart.core.stock.Grouping.prototype.forced = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = !!opt_value;
    if (this.forced_ != opt_value) {
      this.forced_ = opt_value;
      this.dispatchSignal(anychart.Signal.NEEDS_REAPPLICATION);
    }
    return this;
  }
  return this.forced_;
};


/**
 * Grouping levels getter/setter.
 * @param {Array.<anychart.core.stock.Grouping.Level|string>=} opt_value
 * @return {anychart.core.stock.Grouping|Array.<anychart.core.stock.Grouping.Level>}
 */
anychart.core.stock.Grouping.prototype.levels = function(opt_value) {
  if (goog.isDef(opt_value)) {
    this.parseLevels_(opt_value);
    this.dispatchSignal(anychart.Signal.NEEDS_REAPPLICATION);
    return this;
  }
  return this.exportLevels_();
};


/**
 * Getter/setter for maximum visible points count. Mutually exclusive with minPixPerPoint settings.
 * @param {number=} opt_value
 * @return {anychart.core.stock.Grouping|number}
 */
anychart.core.stock.Grouping.prototype.maxVisiblePoints = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = Math.max(2, anychart.utils.toNumber(opt_value));
    if (!isNaN(opt_value) && this.maxPoints_ != opt_value) {
      this.maxPoints_ = opt_value;
      this.minPixels_ = NaN;
      this.dispatchSignal(anychart.Signal.NEEDS_REAPPLICATION);
    }
    return this;
  }
  return this.maxPoints_;
};


/**
 * Getter/setter for minimum pixels per point count. Mutually exclusive with maxVisiblePoints settings.
 * @param {number=} opt_value
 * @return {anychart.core.stock.Grouping|number}
 */
anychart.core.stock.Grouping.prototype.minPixPerPoint = function(opt_value) {
  if (goog.isDef(opt_value)) {
    opt_value = Math.max(0.1, anychart.utils.toNumber(opt_value));
    if (!isNaN(opt_value) && this.minPixels_ != opt_value) {
      this.minPixels_ = opt_value;
      this.maxPoints_ = NaN;
      this.dispatchSignal(anychart.Signal.NEEDS_REAPPLICATION);
    }
    return this;
  }
  return this.minPixels_;
};


// /**
//  * Getter/setter for X grouping mode.
//  * @param {(anychart.enums.XGroupingMode|Function)=} opt_value
//  * @return {anychart.core.stock.Grouping|anychart.enums.XGroupingMode|Function}
//  */
// anychart.core.stock.Grouping.prototype.xMode = function(opt_value) {
//   if (goog.isDef(opt_value)) {
//     opt_value = anychart.enums.normalizeXGroupingMode(opt_value);
//     if (this.xMode_ != opt_value) {
//       this.xMode_ = opt_value;
//       this.dispatchSignal(anychart.Signal.NEEDS_REAPPLICATION);
//     }
//     return this;
//   }
//   return this.xMode_;
// };


/**
 * Returns current grouping level.
 * @return {anychart.core.stock.Grouping.Level}
 */
anychart.core.stock.Grouping.prototype.getCurrentDataInterval = function() {
  return this.currentInterval_;
};


/**
 * Returns true or false depending on current grouping state of the data.
 * @return {boolean}
 */
anychart.core.stock.Grouping.prototype.isGrouped = function() {
  return this.isGrouped_;
};


/**
 * Chooses proper interval for passed range.
 * @param {number} startKey
 * @param {number} endKey
 * @param {number} pixelWidth
 * @param {!anychart.core.stock.Registry} mainRegistry
 * @return {?anychart.core.utils.DateTimeIntervalGenerator}
 */
anychart.core.stock.Grouping.prototype.chooseInterval = function(startKey, endKey, pixelWidth, mainRegistry) {
  var first, len = this.intervals_.length;
  var range = endKey - startKey;
  var mainRegistrySelection = mainRegistry.getSelection(startKey, endKey);
  var originalPointsCount = mainRegistrySelection.lastIndex - mainRegistrySelection.firstIndex; // may be NaN
  originalPointsCount = originalPointsCount ? originalPointsCount + 1 : 0;
  var minDistance = mainRegistrySelection.minDistance;
  var targetPointsCountMax = isNaN(this.maxPoints_) ?
      (pixelWidth / this.minPixels_) :
      this.maxPoints_;
  var result = null;
  if (this.enabled_ && len > 0 && minDistance && (this.forced_ || (originalPointsCount > targetPointsCountMax))) {
    first = 0;
    while (first < len && this.intervals_[first].getRange() <= minDistance) {
      first++;
    }
    first = Math.max(first - 1, 0);
    var i;
    for (i = first; i < len; i++) {
      var interval = this.intervals_[i];
      if (interval.getRange() * targetPointsCountMax >= range) {
        result = interval;
        break;
      }
    }
    // we choose the largest of existing grouping levels that are larger than the original data
    if (!result && first < len)
      result = this.intervals_[len - 1];
  }
  this.currentInterval_ = result ?
      this.exportLevel_(result) :
      minDistance ?
          anychart.utils.estimateInterval(minDistance) :
          {'unit': anychart.enums.Interval.MILLISECOND, 'count': 1};
  this.isGrouped_ = !!result;
  return result;
};


/**
 * Parses and applies passed levels array.
 * @param {Array.<anychart.core.stock.Grouping.Level|string>} intervals
 * @private
 */
anychart.core.stock.Grouping.prototype.parseLevels_ = function(intervals) {
  this.intervals_.length = 0;
  if (goog.isArray(intervals)) {
    var hashes = {};
    for (var i = 0; i < intervals.length; i++) {
      var intervalObj = intervals[i];
      var unit, count;
      if (goog.isString(intervalObj)) {
        unit = intervalObj;
        count = 1;
      } else if (goog.isObject(intervalObj)) {
        unit = String(intervalObj[anychart.opt.UNIT]);
        count = anychart.utils.normalizeToNaturalNumber(intervalObj[anychart.opt.COUNT], 1, false);
      }
      if (unit) {
        var interval = new anychart.core.utils.DateTimeIntervalGenerator(unit, /** @type {number} */(count));
        var hash = interval.getHash();
        if (!(hash in hashes)) {
          hashes[hash] = true;
          this.intervals_.push(interval);
        }
      }
    }
    goog.array.sort(this.intervals_, anychart.core.utils.DateTimeIntervalGenerator.comparator);
  }
};


/**
 * Returns current levels list as an array of objects.
 * @return {Array.<anychart.core.stock.Grouping.Level>}
 * @private
 */
anychart.core.stock.Grouping.prototype.exportLevels_ = function() {
  var result = [];
  for (var i = 0; i < this.intervals_.length; i++) {
    var interval = this.intervals_[i];
    result.push(this.exportLevel_(interval));
  }
  return result;
};


/**
 * Exports passed interval.
 * @param {!anychart.core.utils.DateTimeIntervalGenerator} interval
 * @return {!anychart.core.stock.Grouping.Level}
 * @private
 */
anychart.core.stock.Grouping.prototype.exportLevel_ = function(interval) {
  return {
    'unit': interval.getUnit(),
    'count': interval.getCount()
  };
};


/** @inheritDoc */
anychart.core.stock.Grouping.prototype.disposeInternal = function() {
  // delete this.xMode_;
  anychart.core.stock.Grouping.base(this, 'disposeInternal');
};


/** @inheritDoc */
anychart.core.stock.Grouping.prototype.serialize = function() {
  var json = anychart.core.stock.Grouping.base(this, 'serialize');

  json[anychart.opt.ENABLED] = this.enabled_;
  json[anychart.opt.FORCED] = this.forced_;
  json[anychart.opt.LEVELS] = this.exportLevels_();
  json[anychart.opt.MAX_VISIBLE_POINTS] = this.maxPoints_;
  json[anychart.opt.MIN_PIX_PER_POINT] = this.minPixels_;
  // if (goog.isFunction(this.xMode_)) {
  //   anychart.core.reporting.warning(
  //       anychart.enums.WarningCode.CANT_SERIALIZE_FUNCTION,
  //       null,
  //       ['Stock grouping xMode']
  //   );
  // } else {
  //   json[anychart.opt.X_MODE] = this.xMode_;
  // }

  return json;
};


/** @inheritDoc */
anychart.core.stock.Grouping.prototype.setupSpecial = function(var_args) {
  var arg0 = arguments[0];
  if (goog.isBoolean(arg0) || goog.isNull(arg0)) {
    this.enabled(!!arg0);
    return true;
  }
  if (goog.isArray(arg0)) {
    this.enabled(true);
    this.levels(arg0);
    return true;
  }
  return anychart.core.Base.prototype.setupSpecial.apply(this, arguments);
};


/** @inheritDoc */
anychart.core.stock.Grouping.prototype.setupByJSON = function(config) {
  anychart.core.stock.Grouping.base(this, 'setupByJSON', config);

  this.enabled(config[anychart.opt.ENABLED]);
  this.forced(config[anychart.opt.FORCED]);
  this.levels(config[anychart.opt.LEVELS]);
  this.maxVisiblePoints(config[anychart.opt.MAX_VISIBLE_POINTS]);
  this.minPixPerPoint(config[anychart.opt.MIN_PIX_PER_POINT]);
  // this.xMode(config[anychart.opt.X_MODE]);
};


//exports
anychart.core.stock.Grouping.prototype['enabled'] = anychart.core.stock.Grouping.prototype.enabled;
anychart.core.stock.Grouping.prototype['forced'] = anychart.core.stock.Grouping.prototype.forced;
anychart.core.stock.Grouping.prototype['levels'] = anychart.core.stock.Grouping.prototype.levels;
// anychart.core.stock.Grouping.prototype['xMode'] = anychart.core.stock.Grouping.prototype.xMode;
anychart.core.stock.Grouping.prototype['maxVisiblePoints'] = anychart.core.stock.Grouping.prototype.maxVisiblePoints;
anychart.core.stock.Grouping.prototype['minPixPerPoint'] = anychart.core.stock.Grouping.prototype.minPixPerPoint;
anychart.core.stock.Grouping.prototype['getCurrentDataInterval'] = anychart.core.stock.Grouping.prototype.getCurrentDataInterval;
anychart.core.stock.Grouping.prototype['isGrouped'] = anychart.core.stock.Grouping.prototype.isGrouped;