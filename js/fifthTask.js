let createArr = () => {
  let arr = Array.from(Array(7), () => {
    return Math.floor(Math.random() * 10 + 1);
  });
  return arr;
};

let shiftArr = () => {
  let resArr = createArr();
  console.log(resArr);
  let lenghtArr = resArr.length;
  let sumArr = resArr.reduce((sum, currentValue) => sum + currentValue, 0);
  console.log((sumArr / lenghtArr).toFixed(1));
};
