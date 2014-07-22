var
    // a
    a = 10,
    // b
    b = 20,
    /**
     * c
     */
    c = 30;

foo = {
  x: 10,
  y: 20,
  z: 30
}

/**
 * @param {string}
 */
var e = function(){
    /** jshint ignore:start */
    return {
        x: 10,
        y: 20,    // jshint ignore:line
        z: 30,
        e: 40
    }
    /** jshint ignore:end */
};

var foo = {
  x: 10,
  y: 20,
  z: 30,
  a: {
    b: 20,
    c: 30,
    d: 40,
    e: {
      f: 50,
      g: 60,
      h: 70
    }
  }
};
