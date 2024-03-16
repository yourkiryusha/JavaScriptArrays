let createArr = () => {
  let arr = Array.from(Array(10), () => {
    return Math.floor(Math.random() * 99 + 1);
  });
  return arr;
};

let multipleOfFive = () => {
  let resArr = createArr();
  console.log(resArr);
  resArr = resArr.filter((currentValue) => currentValue % 5 === 0);
  console.log(resArr);
  return resArr;
};
