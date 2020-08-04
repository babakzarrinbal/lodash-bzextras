const _ = require("lodash");
const { getPositions } = require("../index");
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
var input ={
  key1: 'string',
  key2: 'any',
  key3:[
      {
          test:[
          {
              test2:'string'
          },
          {
              test3:'string'
          },
          {
              test4:'string'
          },
          ]
      },
      {
          test:[
          {
              test1:'string'
          },
          {
              test2:'string'
          },
          {
              test3:'string'
          },
          {
              test4:'string'
          },
          ]
      }
  ]
}
console.log(getPositions(input,["asdf"]));
