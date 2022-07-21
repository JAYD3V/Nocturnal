import * as vscode from 'vscode';

import { VSCLogger } from './util/logger.js';

const TEST_CMD = 'nocturnal.test';

/**
 * Temporary function that ques the developer of his/her extension's activation status. */
function notify (mesg: string){
   vscode.window.showInformationMessage(mesg);
}

export function activate (context: vscode.ExtensionContext){
   notify('Nocturnal Activated');

   const logger = new VSCLogger('Nocturnal');
   const disposable = vscode.commands.registerCommand(
      TEST_CMD,
      function (){
         logger.error('Apples & %s', 'Bananas');
      });

   context.subscriptions.push(disposable);
}
