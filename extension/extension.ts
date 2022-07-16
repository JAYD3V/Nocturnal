import * as vscode from 'vscode';
import { apiTest } from './api/util.js';
import { VSCLogger } from './lib/logger.js';


export function activate(context: vscode.ExtensionContext){
    const logger = new VSCLogger();

    const disposable = vscode.commands.registerCommand('nocturnal.test', () => {
        vscode.window.showInformationMessage('Testing 1... 2... 3...');
        logger.printf('Apple: ', 'Gravenstiens are in season, oh ya baby!');
    });

    context.subscriptions.push(disposable);
}
