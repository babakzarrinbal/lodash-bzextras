const _ = require("lodash");

/**
 * recursive function to find position in an object|array with wildcard like [], [*]
 * @param {[]|{}} input object to parse position from
 * @param {[string]|string} poss  positions of object to find
 */
const getPositions = function getPositions(input, poss) {
  let positions = [];
  let i = 0;
  let recursive = false;
  if (!Array.isArray(poss)) poss = [poss];
  for (let p of poss) {
    p = p.replace(/\]\.\[/g, "][");
    p = p.replace(/\.\./g, ".");
    let addrarr = p.split(/\[\]|\[\*\]/);
    if (addrarr.length == 1) {
      positions[i++] = p;
      continue;
    }
    recursive = true;
    let curpos = addrarr.shift();
    let remaining = addrarr.join("[]");
    let curItem = curpos ? _.get(input, curpos) : input;
    if (Array.isArray(curItem)) {
      for (let j in curItem) {
        positions[i++] = (curpos + "[" + j + "]" + remaining)
          .replace(/\.\./g, ".")
          .replace(/^\./, "");
      }
    } else if(curItem && typeof curItem ==='object') {
      for (let j in curItem) {
        positions[i++] = (curpos + "." + j + remaining)
          .replace(/\.\./g, ".")
          .replace(/^\./, "");
      }
    }
  }
  // console.log(recursive,positions);
  if (recursive) return getPositions(input, positions);
  let result = [];
  let j = 0;
  for (let p of positions) {
    if (_.has(input, p)) result[j++] = p;
  }
  return result;
};
module.exports = {
  // getPositions,
  getPositions,
};
