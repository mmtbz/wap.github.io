

// Q1. filter strings
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var banned = ["spray"];

const result = words.filter( word => !banned.includes(word));


console.log(result);

