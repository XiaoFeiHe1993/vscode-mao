import * as vscode from 'vscode'
import { ReminderView } from './reminderView'

export function activate(context: vscode.ExtensionContext) {
  ReminderView.show(context)

  context.subscriptions.push(
    vscode.commands.registerCommand('mao.showReminderView', () => {
      ReminderView.show(context)
    })
  )
}

export function deactivate() {}
