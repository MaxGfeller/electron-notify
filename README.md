# electron-notification

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This module simplifies sending desktop notifications in Electron. It doesn't
matter if you use it from the main or a renderer process and works exactly the
same.

For the main process this uses the [electron-main-notification](https://npm.im/electron-main-notification)
package.

## Usage

Pretty simple:

```javascript
const notify = require('electron-notification')
notify('The title of the notification', {
  body: 'The body of the notification'
}, () => {
  console.log('Notification was clicked!')
})
```
