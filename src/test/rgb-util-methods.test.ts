// import { strictEqual } from 'node:assert/strict';
// import { RGB } from '../api/rgb.js';
// import { format as fmt } from 'node:util';

import RGB from '../api/rgb.js';

/*
 *-----------------------------------------------------------------------*
 *                                          HUE     SAT     VAL          *
 *-----------------------------------------------------------------------*
 *  const rgb = new RGB(96, 32, 208);       262  |  85   |  82           *
 *  const rgb = new RGB(100, 100, 100);       0  |   0   |  39           *
 *  const rgb = new RGB(255, 255, 255);       0  |   0   |  99+          *
 *  const rgb = new RGB(0, 0, 0);             0  |   0   |   0           *
 *  const rgb = new RGB(0, 255, 255);       180  |  99+  |  99+          *
 *  const rgb = new RGB(255, 255, 0);        60  |  99+  |  99+          *
 *  const rgb = new RGB(255, 0, 0);           0  |  99+  |  99+          *
 *  const rgb = new RGB(0, 255, 0);         120  |  99+  |  99+          *
 *  const rgb = new RGB(5, 9, 3);           100  |  67   |   4           *
 *  const rgb = new RGB(64, 64, 65);        240  |   2   |  25           *
 *  const rgb = new RGB(229, 7, 103);       334  |  97   |  90           *
 *=======================================================================*
 */


type RGBArray = [number, number, number];

export function setRGBTestParams (opts: {
   colorName: string,
   expected: {
      rgb: [number, number, number],
      hsv: [number, number, number]
   }
}){
   // Expected RGB-values
   const red   = opts.expected.rgb[0],
         green = opts.expected.rgb[1],
         blue  = opts.expected.rgb[2];

   // Expected RGB-values
   const hue   = opts.expected.hsv[0],
         sat   = opts.expected.hsv[1],
         val   = opts.expected.hsv[2];

   // RGB-object instantiated using the expected RGB-values
   const rgbObj = new RGB(red, green, blue);

   // TEST ARGUMENTS
   const rgbTestParams = {
      name     : opts.colorName,
      rgbObj   : rgbObj,
      expected : {
         rgb : { r: red,  g: green,  b: blue },
         hsv : { h: hue,  s: sat,    v: val  }
      }
   };

   return rgbTestParams;
}
