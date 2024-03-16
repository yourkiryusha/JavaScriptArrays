let createArr = () => {
  let arr = Array.from(Array(10), () => {
    return Math.floor(Math.random() * 9 + 2);
  });
  return arr;
};

let sumArr = () => {
  let newArr = createArr();
  console.log(newArr);
  newArr = newArr
    .filter((currentValue) => currentValue % 2 === 0)
    .reduce((sumValues, currentValue) => sumValues + Math.sqrt(currentValue), 0);
  console.log(newArr);
  return newArr;
};
