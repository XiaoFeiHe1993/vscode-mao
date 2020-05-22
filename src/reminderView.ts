import * as vscode from 'vscode'
import Asset from './asset'
import quotations from './quotations'
import { Utility } from './utility'

export class ReminderView {
  private static panel: vscode.WebviewPanel | undefined

  public static show(context: vscode.ExtensionContext) {
    let asset: Asset = new Asset(context)

    const imagePath = asset.getImageUri()
    const title = quotations[Utility.randomNum(quotations.length - 1)]
    const documentTitle = 'quotations from mao'

    if (this.panel) {
      this.panel.webview.html = this.generateHtml(imagePath, title, documentTitle)
      this.panel.reveal()
    } else {
      this.panel = vscode.window.createWebviewPanel('resport', documentTitle, vscode.ViewColumn.Two, {
        enableScripts: true,
        retainContextWhenHidden: true,
      })
      this.panel.webview.html = this.generateHtml(imagePath, title, documentTitle)
      this.panel.onDidDispose(() => {
        this.panel = undefined
      })
    }
  }

  protected static generateHtml(
    imagePath: vscode.Uri | string,
    title: string,
    documentTitle: string
  ): string {
    let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${documentTitle}</title>
        </head>
        <body>
            <div><h1>${title}</h1></div>
            <div><img src="${imagePath}"></div>
        </body>
        </html>`
    return html
  }
}
