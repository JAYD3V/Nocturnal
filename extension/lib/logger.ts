import * as vscode from 'vscode';
import { format as fmt } from 'node:util';


export class VSCLogger {
    channel;

    constructor(loggerID = 'Log (Nocturnal)'){
        this.channel = vscode.window.createOutputChannel(loggerID);
    }

    /** Print msg in output channel. Works using  printf function. */
    printf(msg: string, ...vals: any[]){
        const _mesg = 'Nocturnal | INFO > ' + fmt(msg, ...vals);

        this.channel.appendLine(_mesg);
        console.info(_mesg);
    }
}
