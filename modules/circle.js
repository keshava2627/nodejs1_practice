// const pi = 3.18;
// const circlrArea = (circleradius) => {
//   return pi * circleradius * circleradius;
// };
// const circlecircumference = (circleradius) => {
//   return 2 * pi * circleradius;
// };

// module.exports = { /* here we are exporting at the end of the file this is one way of doing exporting. */
//   circlrArea,
//   circlecircumference,
// };

/* noe lets see another way  */

// module.exports.pi = 3.18;
// module.exports.circlrArea = (circleradius) => {
//   /* here is the another way of exporting the files */
//   return 3.14 * circleradius * circleradius;
// };
// module.exports.circlecircumference = (circleradius) => {
//   /* here module.exports is a default one which run behind the secnes which exports the code  */
//   return 2 * 3.14 * circleradius;
// };

/* now lets see the third way of exporting. */

// const pi = 3.18;
// const circlrArea = (circleradius) => {
//   return pi * circleradius * circleradius;
// };
// const circlecircumference = (circleradius) => {
//   return 2 * 3.14 * circleradius;
// };
// module.exports.circlrArea = circlrArea;
// module.exports.circlecircumference = circlecircumference;
// module.exports.pi = pi;

/* the above is the third way exporting modules */
