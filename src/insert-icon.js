import BrowserWindow from 'sketch-module-web-view'
import { getWebview } from 'sketch-module-web-view/remote'
import UI from 'sketch/ui'
import sketch from 'sketch'

const webviewIdentifier = 'iconfont-webview.webview'

export default function () {
  const options = {
    identifier: webviewIdentifier,
    alwaysOnTop: true,
    width: 480,
    height: 264,
    show: false,
    title: 'Select an icon to insert'
  }

  const browserWindow = new BrowserWindow(options)

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  })

  const webContents = browserWindow.webContents

  var document = sketch.getSelectedDocument()
  var page = document.selectedPage
  var Text = sketch.Text

  webContents.on('insertText', text => {
    UI.message(text)

    new sketch.Text({
      parent: page,
      text: text,
      alignment: Text.Alignment.center,
      style: {
        fontFamily: 'Material Icons',
        fontSize: 20,
      }
    })

    onShutdown()
  })

  browserWindow.loadURL(require('../resources/webview.html'))
}

// When the plugin is shutdown by Sketch (for example when the user disable the plugin)
// we need to close the webview if it's open
export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier)
  if (existingWebview) {
    existingWebview.close()
  }
}
