// import { strictEqual } from 'node:assert/strict';
// import { RGB } from '../api/rgb.js';
// import { format as fmt } from 'node:util';

import Color from '../../engine/rgb.js';

/*
 |*---------------------------------------------------------------|*
 |*                                          HUE     SAT     VAL  |*
 |*---------------------------------------------------------------|*
 |*  const rgb = new RGB(96, 32, 208);       262  |  85   |  82   |*
 |*  const rgb = new RGB(100, 100, 100);       0  |   0   |  39   |*
 |*  const rgb = new RGB(255, 255, 255);       0  |   0   |  99+  |*
 |*  const rgb = new RGB(0, 0, 0);             0  |   0   |   0   |*
 |*  const rgb = new RGB(0, 255, 255);       180  |  99+  |  99+  |*
 |*  const rgb = new RGB(255, 255, 0);        60  |  99+  |  99+  |*
 |*  const rgb = new RGB(255, 0, 0);           0  |  99+  |  99+  |*
 |*  const rgb = new RGB(0, 255, 0);         120  |  99+  |  99+  |*
 |*  const rgb = new RGB(5, 9, 3);           100  |  67   |   4   |*
 |*  const rgb = new RGB(64, 64, 65);        240  |   2   |  25   |*
 |*  const rgb = new RGB(229, 7, 103);       334  |  97   |  90   |*
 |*== =============================================================|*
 */

type Rgb = { red: number, grn: number, blu:number };
type HSV = { hue:number, sat:number, val:number };

function colorFmtTestArgs (name:string, expect: { rgb: Rgb, hsv: HSV }){

   const actual = new Color(expect.rgb.red, expect.rgb.grn,
                            expect.rgb.blu);
   return {
      colorName : name,
      expect    : expect,
      actual    : {
         hsv : actual.hsv,
         rgb : {
            red : actual.red,
            grn : actual.grn,
            blu : actual.blu
         }
      }
   };
}

// TODO: Change default genColorFormatTestArg
export default colorFmtTestArgs;
