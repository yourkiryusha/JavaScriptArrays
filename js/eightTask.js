let enterNumber = prompt("Введите число: ");

if (!isNaN(Number(enterNumber))) {
  let resNumber = enterNumber
    .split("")
    .map((currentValue) => {
      let num = +currentValue + 1;
      return num;
    })
    .join("");
  alert(resNumber);
} else {
  alert("Вы ввели не число!");
}
