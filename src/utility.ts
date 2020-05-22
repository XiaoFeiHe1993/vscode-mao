import * as vscode from 'vscode'

export class Utility {
  public static getConfiguration(): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration('report')
  }

  // 生成从minNum到maxNum的随机数
  public static randomNum(minNum: any, maxNum?: any) {
    switch (arguments.length) {
      case 1:
        return parseInt(`${Math.random() * minNum + 1}`, 10)
      case 2:
        return parseInt(`${Math.random() * (maxNum - minNum + 1) + minNum}`, 10)
      default:
        return 0
    }
  }
}
