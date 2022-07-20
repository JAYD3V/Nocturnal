const { round } = Math;


export class RGB {
    // PRIVATE FIELDS
    #_R;
    #_G;
    #_B;
    #_max;
    #_min;
    #_D;

    // PRIVATE METHODS
    #_getBrt = () => round(this.#_max / 255 * 100);

    #_getSat = () => this.#_D == 0 ? 0 : round(this.#_D / this.#_max * 100);

    #_getHue(){
        let hue = 0;

        if (this.#_D != 0){
            hue = this.r === this.#_max
                ? ((this.g - this.b) / this.#_D) % 6
                : this.g === this.#_max
                    ? (this.b - this.r) / this.#_D + 2
                    : (this.r - this.g) / this.#_D + 4;
        }

        hue = round(hue * 60);
        hue += (hue < 0) ? 360 : 0;

        return hue;
    }

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
    constructor(red: number, green: number, blue: number){
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

    // PUBLIC CLASS-MEMBERS
    HSV;

    /** RGB object's value for `red` */
    set r(_1_to_255_: number){ this.#_R = _1_to_255_; }
    get r(){ return this.#_R; }

    /** RGB object's value for `green` */
    set g(_1_to_255_: number){ this.#_G = _1_to_255_; }
    get g(){ return this.#_G; }

    /** RGB object's value for `blue` */
    set b(_1_to_255_: number){ this.#_B = _1_to_255_; }
    get b(){ return this.#_B; }

    print(){ console.log('RED=%s, GRN=%s, BLU=%s', this.r, this.g, this.b); }
}
