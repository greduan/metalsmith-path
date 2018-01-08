var path = require('path');

module.exports = plugin;

function plugin(options) {
	options = options || {};
	options = {
		property		: "path",
		baseDirectory	: options.baseDirectory || "",
		directoryIndex	: options.directoryIndex || false,
		extensions : options.extensions || ['.html']
	}

	return function(files, metalsmith, done) {
		setImmediate(done);

		// Loop through each file
		Object.keys(files).forEach(function(file) {

			// Only process HTML files
			if (!isFiletype(file, options.extensions)) {
				return;
			}

			var url = file;

			if (options.directoryIndex) {
				if (path.basename(url) == options.directoryIndex) {
					url = path.dirname(url) + "/";
				}
			}

			if (options.baseDirectory) {
				url = options.baseDirectory + url;
			}

			// add to path data for use in links in templates
			files[file][options.property] = '.' == url ? '' : url;
		});
	};
}

// Check if filename is HTML
function isFiletype(file, extensions) {
	return extensions.indexOf(path.extname(file)) !== -1;
}
