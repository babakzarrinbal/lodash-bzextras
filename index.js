import _ from 'lodash'
/**
 * get multiple positions if you set [] in path for loadash
 * @param {*} item input object or array
 * @param {string} position position of string to check
 */
const getPositions = function getPositions(item, position) {
  // if the item is array loop through it
  if (Array.isArray(item))
    return item.reduce(
      (cu, v, i) => [
        ...cu,
        ...getPositions(v, position).map(p => "[" + i + "]." + p)
      ],
      []
    );

  // remove unwanted dot at the begining
  position = position[0] == "." ? position.slice(1) : position;
  let arraysplit = position.split("[]");

  // return if it has no child array
  if (arraysplit.length < 2) return [position];

  let curar = _.get(item, arraysplit[0]);

  //check if the path to array is not array or empty
  if (!Array.isArray(curar)) return [];
  let positions = [];

  // check if its the last level
  if (arraysplit.length == 2) {
    //if there are string within the array
    positions = curar.map(
      (ar, i) => arraysplit[0] + "[" + i + "]" + arraysplit[1]
    );
  } else
    positions = [
      ...positions,
      ...getPositions(
        _.get(item, arraysplit[0]),
        arraysplit.slice(1).join("[]")
      ).map(p => arraysplit[0] + p)
    ];

  return positions;
};

export {getPositions} ;
