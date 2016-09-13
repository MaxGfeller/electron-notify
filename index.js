/* global Notification */
const mainNotify = require('electron-main-notification')

module.exports = function (title, opts, onClick) {
  if (process.type === 'main') return mainNotify(title, opts, onClick)

  var notification = new Notification(title, opts)
  if (!onClick) return

  notification.onclick = onClick
}
