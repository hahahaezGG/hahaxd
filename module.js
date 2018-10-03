/**
 * Module
 */

// External Library
import _ from '../node_modules/lodash/dist/lodash.js';

// Private variables
let _eventName = '_test';

// Getter for private variable
export let getEventName = function () {
  return _eventName;
};
