/**
 * Created by pomy on 8/22/16.
 */

'use strict';

var path = require('path');
var views = require('co-views');

module.exports = views(path.resolve(__dirname, '../views'),{
    map: {html: 'swig'}
});