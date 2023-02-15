// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Position } from 'vscode';
var path = require('path');
import { genericTemplate } from './header';
import { commentOut } from './utils';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "anis-header" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'anis-header.insertHeader',
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      //grab the editor
      const editor = vscode.window.activeTextEditor;
      // get full path of the file
      // if (vscode.workspace.workspaceFolders !== undefined) {
      //   let wf = vscode.workspace.workspaceFolders[0].uri.path;
      //   let f = vscode.workspace.workspaceFolders[0].uri.fsPath;

      //   const message = `YOUR-EXTENSION: folder: ${wf} - ${f}`;

      //   vscode.window.showInformationMessage(message);
      // } else {
      //   const message =
      //     'YOUR-EXTENSION: Working folder not found, open a folder an try again';

      //   vscode.window.showErrorMessage(message);
      // }

      var filename = editor?.document.fileName;
      var filePath = path.basename(filename);
      const fileExtension = filename!.split('.')[1];

      if (!editor) {
        vscode.window.showErrorMessage('No editor Selected!');
        return;
      }
      const text = 'IBM';

      editor.edit((edit) => {
        //Go the the beginning of the file and insert the header
        edit.insert(new Position(0, 0), genericTemplate);
        vscode.window.showInformationMessage('Header inserted');
      });
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
