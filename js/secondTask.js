let createArr = () => {
  let arr = Array.from(Array(10), () => {
    return Math.floor(Math.random() * 99 + 2);
  });
  return arr;
};

let sumArr = () => {
  let newArr = createArr();
  console.log(newArr);
  newArr = newArr
    .filter((currentValue) => currentValue > 0 && currentValue < 10)
    .reduce((sumValues, currentValue) => sumValues + currentValue, 0);
  console.log(newArr);
  return newArr;
};
