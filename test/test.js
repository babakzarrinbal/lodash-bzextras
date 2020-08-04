const _ = require("lodash");
const { getPositions,getPos } = require("../index");
var test = [{
  a: {
    a: [
      { ali: 9, babak: 2 },
      { ali: 1, babak: 2 },
      { ali: 1, babak: 2 },
      { ali: 1, babak: 2 },
    ],
    b: {
      ali: 4,
      d: { adsfa: 2, g: [25, 6, 7, 8] },
    },
  },
  b: {
    a: [
      { ali: 10, babak: 2 },
      { ali: 1, babak: 2 },
      { ali: 1, babak: 2 },
      { ali: 1, babak: 2 },
    ],
    b: {
      ali: 4,
      d: { adsfa: 2, g: [25, 6, 7, 8] },
    },
  },
}];
console.log(getPos(test,["[*][*]"]));
