const findMissingWithFor = (source) => {
  let result = 'None found with FOR';
  const length = source.length + 1;
  for (let index = 0; index < length - 1; index++) {
    const target = index + 1;
    const found = source.some((item) => item === target);
    if (!found) {
      result = target;
      break;
    }
  }
  return result;
};

const findMissingWithReduce = (arr) => {
  return arr
    .sort((a, b) => a - b)
    .reduce((accumulator, current, index, arr) => {
      const target = index + 1;

      if (current !== target) {
        accumulator = target;
        arr.splice(0);
        console.log({ 'new array': arr });
      }

      return accumulator;
    }, 'None found with REDUCE');
};

const findMissingWithMap = (arr) => {
  const arrSorted = arr.sort((a, b) => a - b);

  const find = arrSorted
    .map((item, index) => {
      if (item !== index + 1) return index + 1;
    })
    .filter((item) => item !== undefined)
    .slice(0, 1);

  return find[0] || 'None Found with MAP';
};

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function makeNewFilledArray(length) {
  let result = [];
  for (let index = 0; index < length; index++) result[index] = index + 1;
  return result;
}

function removeRandomItem(source) {
  const random = Math.floor(Math.random() * source.length);
  const el = source.splice(random, 1)[0];
  console.log(`Missing number is ${el}`);
  return source;
}

let control = shuffle(makeNewFilledArray(1000));

console.log(findMissingWithFor(control));
console.log(findMissingWithMap(control));
console.log(findMissingWithReduce(control));

let source = removeRandomItem(control);

console.log(findMissingWithMap(source));

console.log(findMissingWithReduce(source));

console.log(findMissingWithFor(source));
