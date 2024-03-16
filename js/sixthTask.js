let createArr = () => {
  let arr = Array.from(Array(7), () => {
    return Math.floor(Math.random() * 10 + 1);
  });
  return arr;
};

let shiftArr = () => {
  let resArr = createArr();
  console.log(resArr);
  let shiftElement = resArr.shift();
  console.log(shiftElement);
  resArr.push(shiftElement);
  console.log(resArr);
  return resArr;
};
