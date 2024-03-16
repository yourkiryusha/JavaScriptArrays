let createArr = () => {
  let arr = Array.from(Array(8), () => {
    return Math.floor(Math.random() * 10 + 1);
  });
  return arr;
};

let resArr = (arr) => {
  console.log(arr);
  let isHonest = arr.filter((value, index) => index % 2 === 0);
  console.log(isHonest);
  let isOdd = arr.filter((value, index) => index % 2 !== 0);
  console.log(isOdd);
  let sumIsHonest = isHonest.reduce((sum, currentValue) => sum + currentValue, 0);
  let sumIsOdd = isOdd.reduce((sum, currentValue) => sum + currentValue, 0);
  console.log(sumIsHonest / sumIsOdd);
  return sumIsHonest / sumIsOdd;
};
