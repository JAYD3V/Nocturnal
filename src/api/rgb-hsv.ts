export class RGB {
    #_R: number;
    #_G: number;
    #_B: number;

    /** RED — *RGB Object's value of* `red` */
    set red(_1_to_255_:number){ this.#_R = _1_to_255_; }
    get red(){ return this.#_R; }

    /**
     * RED — *RGB Object's value of* `red` */
    set r(_1_to_255_:number){ this.#_R = _1_to_255_; }
    get r(){ return this.#_R; }

    /** GREEN — *RGB Object's value of* `green` */
    set green(_1_to_255_:number){ this.#_G = _1_to_255_; }
    get green(){ return this.#_G; }
    /** GREEN — *RGB Object's value of* `green` */
    set g(_1_to_255_:number){ this.#_G = _1_to_255_; }
    get g(){ return this.#_G; }

    /** BLUE — *RGB Object's value of* `blue` */
    set blue(_1_to_255_:number){ this.#_B = _1_to_255_; }
    get blue(){ return this.#_B; }
    /** BLUE — *RGB Object's value of* `blue` */
    set b(_1_to_255_:number){ this.#_B = _1_to_255_; }
    get b(){ return this.#_B; }

    /** ### RGB Class
     * Abstract class that represents a color in RGB format.
     * There are many RGB classes available for download as a module, so it is
     * important to get the one that has the ability to do what you need it to.
     * This version of the RGB class focuses on HSV conversion. If thats not
     *  what you need then you might want to look at other RGB class on **npm**.
     * @param red Value of red (`0` - `255`)
     * @param green Value of green (`0` - `255`)
     * @param blue Value of blue (`0` - `255`)
     * @method `RGB.toHSV()` Converts the RGB object to HSV format. The HSV format is returned by the method as an object that has 3 members: `RGB.toHSV().h`, `RGB.toHSV().s`, & `RGB.toHSV().v`.  */
    constructor(red:number, green:number, blue:number){
        this.#_R = red;
        this.#_G = green;

        /**
        * **BLUE**
        * The value of B in RGB. B is short for Blue */
        this.#_B = blue;
    }


    /** ### Method: `RGB.toHSV()`
     * Converts the RGB object to HSV format.
     * @returns  Returns an object containing the result of the ***"RGB"*** *~to~* ***"HSV"*** conversion, which _(obviously)_ is in HSV format. An object containing 3-members is used to represent the format, the object and its members are described in the following example:
     * @example
     * ```````````````````````````````````````````````````````````````
     *    const hue = new RGB(40, 50, 100).toHSV().h;
     *    const hsv = rgb.toHSV();
     *    const hue = hsv.h;
     *    const saturation = hsv.s;
     *    const brightnessOrValue = hsv.v;
     * ``````````````````````````````````````````````````````````````` */
    toHSV(){
        let h = 0, s = 0, v = 0;

        const { r, g, b } = this;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        const $D = max - min;

        if ($D !== 0){
            h = (r === max)
                ? ((g - b) / $D) % 6
                : (g === max)
                        ? (b - r) / $D + 2
                        : (r - g) / $D + 4;
        }

        h = Math.round(h * 60);

        h += (h < 0)
            ? 360 : 0;

        // SUPER SIMPLE ALGORITHM for SATURATION
        if (max != 0){ s = Math.round($D / max * 100); }

        // s = (max === 0 ? 0 : $D / max);
        // s *= 100;
        // s = Math.round((max === 0 ? 0 : $D / max) * 100);
        v = Math.round(max / 255 * 100);
        return { h, s, v };
    }


    print(){
        console.log('RGB Object:\n    Red: %s,  Grn: %s,  Blu: %s\n',
                    this.red, this.green, this.blue);
    }
}
