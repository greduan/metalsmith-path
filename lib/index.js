// dependencies
var path = require('path');

// path vars
var basename = path.basename;
var dirname = path.dirname;
var extname = path.extname;
var join = path.join;

// expose to Node.js
module.exports = plugin;

// the plugin
function plugin() {
	return function(files, metalsmith, done) {
		setImmediate(done);
		// for each file
		Object.keys(files).forEach(function(file){
			// just checkin...
			if (!html(file)) return;

			// define vars
			var data = files[file];
			var path = resolve(file);

			// add to path data for use in links in templates
			data.path = '.' == path ? '' : path;
		});
	};
}

// figure out file path
function resolve(path) {
	var ret = dirname(path);
	var base = basename(path);
	var ret = join(ret, base);
	return ret;
}

// figure out if file is HTML
function html(path){
	return /.html/.test(extname(path));
}
