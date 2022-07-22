import { format } from 'node:util';

const { round } = Math;

/** #### RGB Class
 *
 * The `RGB` class abstracts a color and allows the developer to work with that color in various formats. The class provides the tools (methods) necessary for changing the color dynamical, or converting the color from RGB to HSV.
 *
 * @param red Number ranging from 0 to 255 — _"Sets RGB's red value"_
 * @param green Number ranging from 0 to 255 — _"Sets RGB's green value"_
 * @param blue Number ranging from 0 to 255 — _"Sets RGB's blue value"_
 * @property `HSV` Contains an HSV conversion of the abstract RBG color.
 * @method `RGB.toStr()` Returns the RGB obj in a parsable string format.
 * @method `RGB.print()` Prints a text representation of the RBG obj.
 * */
export default class RGB{
   /*
   -------- PRIVATE PROPERTIES -------- */
   #_R;
   #_G;
   #_B;
   #_max;
   #_min;
   #_D;
   /*

   -------- PUBLIC PROPERTIES -------- */
   HSV;
   /** RGB object's value for `red` */
   set red (_1_to_255_: number){ this.#_R = _1_to_255_; }
   get red (){ return this.#_R; }
   /** RGB object's value for `green` */
   set green (_1_to_255_: number){ this.#_G = _1_to_255_; }
   get green (){ return this.#_G; }
   /** RGB object's value for `blue` */
   set blue (_1_to_255_: number){ this.#_B = _1_to_255_; }
   get blue (){ return this.#_B; }


   constructor (red: number, green: number, blue: number){
      this.#_R = red;
      this.#_G = green;
      this.#_B = blue;
      this.#_max = Math.max(red, green, blue);
      this.#_min = Math.min(red, green, blue);
      this.#_D = this.#_max - this.#_min;

      this.HSV = {
         hue : this.#_getHue,
         sat : this.#_getSat,
         val : this.#_getBrt
      };
   }



   /**
     * ***Converts RGB object to string format.***
     *
     * ------------
     *
     * @param colorFormat Accepts values 'rgb' & 'hsv'. The **`fmt`** param defaults to rgb, therefore, the only reason to set it is if you want to return a string that contains the instantiated RGB object in HSV format.
     * @returns string that's a parsable representation of the instantiated RGB object. */
   toString (colorFormat?: 'rgb' | 'hsv'){
      colorFormat = colorFormat ?? 'rgb';

      if (colorFormat === 'rgb'){
         return format('RGB {red:%d, green:%d, blue:%d}',
                       this.red, this.green, this.blue);
      }

      if (colorFormat === 'hsv'){
         return format('HSV {hue:%d, sat:%d, val:%d}',
                       this.HSV.hue, this.HSV.sat, this.HSV.val);
      }

      throw new ReferenceError(
         'An invalid argument was passed to the `RGB.toStr()` method\'s\n'
         + 'parameter `colorFormat`. Valid arguments for the parameter\n'
         + 'are as follows:\n   1| "rgb"\n   2| "hsv\n   3| "undefined"\n'
      );
   }



   print (colorFormat?: 'rgb' | 'hsv'){
      colorFormat = colorFormat ?? 'rgb';

      if (colorFormat === 'rgb'){ console.log(this.toString()); } else if (colorFormat === 'hsv'){ console.log(this.toString('hsv')); } else {
         throw new ReferenceError();
      }
   }



   #_getBrt (){
      return round(this.#_max / 255 * 100);
   }



   #_getSat (){
      return this.#_D == 0 ? 0 : round(this.#_D / this.#_max * 100);
   }



   #_getHue (){
      let hue = 0;

      if (this.#_D != 0){
         hue = this.red === this.#_max
            ? ((this.green - this.blue) / this.#_D) % 6
            : this.green === this.#_max
               ? (this.blue - this.red) / this.#_D + 2
               : (this.red - this.green) / this.#_D + 4;
      }

      hue = round(hue * 60);
      hue += (hue < 0) ? 360 : 0;

      return hue;
   }
}
