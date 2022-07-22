// import { strictEqual } from 'node:assert/strict';
// import { RGB } from '../api/rgb.js';
// import { format as fmt } from 'node:util';

import RGB from '../../engine/rgb.js';

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


type RGBxHSVxColorObj = {
      RGB: { red: number, grn: number, blu:number },
      HSV: { hue:number, sat:number, val:number }
};


function generateColorFormatTest (name: string,
                                  expected: RGBxHSVxColorObj){
   const { red: R, grn: G, blu: B } = expected.RGB;

   const rgb = new RGB(R, G, B);

   const actual = {
      RGB : { red: rgb.red, grn: rgb.green, blu: rgb.blue },
      HSV : { hue: rgb.HSV.hue, sat: rgb.HSV.sat, val: rgb.HSV.val }
   };

   return {
      colorName : name,
      expected  : expected,
      actual    : actual
   };
}


// const NOCTURNAL_UNIT_TEST = {
//    foo: ''
// }


export default generateColorFormatTest;
// TODO: REMOVE EXPORT STATEMENT
/*
'An invalid argument was passed to the `RGB.print()\n`'
            + 'method\'s parameter: `colorFormat`. Valid arguments\n'
            + 'for the parameter are as follows:\n'
            + '   1| "rgb"\n   2| "hsv\n   3| "undefined"\n'
 */
