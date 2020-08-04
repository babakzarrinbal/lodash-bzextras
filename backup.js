// /**
//  * get multiple positions if you set [] in path for loadash
//  * @param {*} item input object or array
//  * @param {string} position position of string to check
//  */
// const getPositions = function getPositions(item, position) {
//   // remove unwanted dot at the begining
//   position = position[0] == "." ? position.slice(1) : position;

//   // if the item is array loop through it
//   let positions = [];
//   let i = 0;

//   let arraysplit = position.split(/\[\]|\[\*\]/);

//   // return if it has no child array
//   if (arraysplit.length < 2) return [position];

//   let currpos =
//     arraysplit[0].slice(-1) == "." ? arraysplit[0].slice(0, -1) : arraysplit[0];
//   let curar = currpos ? _.get(item, currpos) : item;

//   // check if its the last level
//   if (arraysplit.length == 2) {
//     if (Array.isArray(curar)) {
//       // for arrays
//       for (let j in curar) {
//         positions[i++] = arraysplit[0] + "[" + j + "]" + arraysplit[1];
//       }
//     } else {
//       // for objects
//       for (let j in curar) {
//         positions[i++] =
//           currpos +
//           (currpos ? "." : "") +
//           j +
//           (arraysplit[1].slice(0, 1) != "." ? "." : "") +
//           arraysplit[1];
//       }
//     }
//   } else {
//     // if starting with [] or [*]
//     if (!currpos) {
//       if (Array.isArray(curar)) {
//         for (let j in curar) {
//           for (let p of getPositions(
//             curar,
//             "[" + j + "]" + arraysplit.slice(1).join("[]")
//           )) {
//             positions[i++] = p;
//           }
//         }
//       } else {
//         for (let j in curar) {
//           for (let p of getPositions(
//             curar,
//             j + arraysplit.slice(1).join("[]")
//           )) {
//             positions[i++] = p;
//           }
//         }
//       }
//     } else {
//       let pos = getPositions(curar, arraysplit.slice(1).join("[]"));
//       for (let p in pos) {
//         positions[i++] = arraysplit[0] + p;
//       }
//     }
//   }

//   return positions;
// };
