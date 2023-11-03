
function sum(fromN, toN) {

  if(fromN === toN) {
    return fromN;
  }

  return fromN + sum(fromN + 1, toN);

}

console.log(sum(1, 4)); // 10

/*
fromN
fromN + previous from N
etc.
stop when fromN === toN
*/


module.exports = sum;
