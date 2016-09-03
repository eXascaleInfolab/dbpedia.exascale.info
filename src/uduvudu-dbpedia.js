/* global $:false, Handlebars:false */
'use strict';

window._ = require('underscore');
require('typeahead.js');

// Make the ldf-client module available as a global browser object
window.ldf = require('ldf-client');
window.N3 = require('N3');

require('uduvudu')
