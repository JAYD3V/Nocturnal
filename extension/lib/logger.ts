// TODO: Make entry about the user's output window as it pertains to this logger

import * as vscode from 'vscode';
import { format as fmt } from 'node:util';

type PromptType = 'error' | 'warning' | 'info' | 'debug';



export class VSCLogger {
    readonly #_statusCode = { error: 0, warning: 1, info: 2, debug: 3 };
    #_channel: vscode.OutputChannel;
    #_prompt;
    extName: string;






    /**
     * ### VSCLogger
     * VSCLogger is a logger for vscode. VSCLogger aims to help the user keep
     * there code dry & readable while printing useful error messages that can
     * be read on both the developer & user's side, but without having to make
     * logging calls to two functions. It also helps by consistently printing a
     * prompt in the output window so that messages read by the reader are
     * concise & look professional.
     *
     * ##### Currently VSCLogger prints messages for 4 different statuses.
     * 1. error
     * 2. warning
     * 3. info
     * 4. debug \
     *
     * @param extName Name of your extension. The extension name is used
     * to name the Output Window on the user side. To learn more view the
     * "README.md" file in the projects root directory, or at the link
     * below:
     *
     * @link https://github.com/JAYD3V/VSCode-Extension-Logger  */
    constructor(extName:string){
        this.#_prompt = {
            error   : fmt('[%s | \'error\'] - ', extName),
            warning : fmt('[%s |  \'warn\'] - ', extName),
            info    : fmt('[%s |  \'info\'] - ', extName),
            debug   : fmt('[%s | \'debug\'] - ', extName)
        };

        this.#_channel = vscode.window.createOutputChannel(extName);
        this.extName = extName;
    }


    #_formatMesg = (promptType:PromptType, mesg:string, ...vals: any[]) =>
        fmt('%s  %s', this.#_prompt[promptType], fmt(mesg, ...vals));


    #_status(status:PromptType, msg:string, ...vals: any[]){
        this.mesg(this.#_formatMesg(status, msg, ...vals));
    }


    /**
     * Print a simple single string message in the developer's console as well as the user's ***"Output Window"***.
     * @param mesg String that will become the logged mesg. */
    mesg(mesg:string){
        this.#_channel.appendLine(mesg + '\n');
        console.info(mesg);
    }



    /**
     * @param errMesg Error messages should only be printed when an error
     * occurs. They should be brief, yet precise. Make sure to include enough
     * information for the person reading the message to locate where the error
     * is at, but without printing so much that they miss an important detail.
     * Every part of an error message should be critically important. */
    error(errMesg:string, ...vals: any[]){
        this.#_status('error', errMesg, ...vals);
    }




    /**
     * @param warning Warning should not be catastrophic, and they shouldn't
     * inform the user of unintended, &/or unexpected behavior, that is a job
     * for error messages & exceptions. Warnings should inform a user about
     * possible risks poised by external sources, or posed by the user his/her
     * own self. Warning should be printed when a configuration or action
     * threatens the security or integrity of the system, or if working with a
     * server, possible nefarious activity. */
    warning(warning:string, ...vals: any[]){
        this.#_status('warning', warning, ...vals);
    }




    /**
     * @param info - Message should be informative, and not include any error
     * or warning info. The info printed should be new to the user, its counter
     * productive to print information that is already known. */
    info(info:string, ...vals: any[]){
        this.#_status('info', info, ...vals);
    }




    /**
     * @param debugInfo The message passed to debug info should include
     * information about the system that helps to troubleshoot any possible
     * issues that might arise. Good debugging messages can make a user's
     * experience far better, this is 10 times as true if the user is an I.T.
     * professional or another programmer. */
    debug(debugInfo:string, ...vals: any[]){
        this.#_status('debug', debugInfo, ...vals);
    }
}
