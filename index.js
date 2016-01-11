require('babel-register')({
  ignore: false,
  presets: ['es2015', 'stage-0']
});

var pkg = require('./package.json');
var d = require('debug')('atom-build-plugins');

var exports = {};
var deps = Object.keys(pkg.dependencies);

for (var i=0; i < deps.length; i++) {
  var cur = deps[i];
  if (!cur.match(/^build-/i)) continue;

  d("Loading " + cur);
  exports[cur] = require(cur).provideBuilder();
}

module.exports = exports;
