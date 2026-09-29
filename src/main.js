'use strict'
// Companion module API 2.x: the host imports this file and expects the instance
// class as the (default) export, rather than calling runEntrypoint.
const { PxwInstance } = require('./instance')

module.exports = PxwInstance
module.exports.default = PxwInstance
// No config/action migrations yet - this is the first published version.
module.exports.UpgradeScripts = []
