import * as vscode from 'vscode';
import { apiTest } from './api/util.js';
import { VSCLogger } from './lib/logger.js';


export function activate(context:vscode.ExtensionContext){
    const outputWindow = vscode.window.createOutputChannel('Log (Nocturnal)');
    const logger = new VSCLogger('Nocturnal');

    const disposable = vscode.commands.registerCommand(
            'nocturnal.test', function (){
                const infoMesg = 'Testing 1... 2... 3...';
                vscode.window.showInformationMessage(infoMesg);

                logger.error('Apples & %s', 'Bananas');
            });

    context.subscriptions.push(disposable);
}
