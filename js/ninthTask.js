let arr = ["http://microsoft.com", "http://smeshariki.ru", "vk.com", "instagram.com", "http://mail.ru"];
console.log(arr);
arr = arr.filter((currentValue) => currentValue.startsWith("http://"));
console.log(arr);
