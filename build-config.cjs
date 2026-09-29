// ssh2 optionally loads cpu-features (a native accelerator); the require is
// wrapped in try/catch in ssh2 and it falls back to pure JS when absent, so
// mark it external rather than bundle a native module.
module.exports = {
	externals: ['cpu-features'],
}
