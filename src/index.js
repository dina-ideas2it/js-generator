function* convertArrayToIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

function getRandomNumbers() {
  const randomNumbers = [];
  for (let i = 0; i < 100; i++) {
    randomNumbers.push(Math.random());
  }
  return randomNumbers;
}

const randomNumbers = getRandomNumbers();
const iterator = convertArrayToIterator(randomNumbers);
let next = iterator.next();
while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
