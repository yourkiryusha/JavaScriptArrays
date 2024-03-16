let createArr = () => {
  let arr = Array.from(Array(5), () => {
    return Math.floor(Math.random() * 9 + 2);
  });
  return arr;
};

let isHonest = () => {
  let resArr = createArr();
  console.log(resArr);
  resArr = resArr.every((currentValue) => currentValue % 2 === 0);
  console.log(resArr);
  return resArr;
};
