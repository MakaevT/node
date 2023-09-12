// тут код, который удалит файл lorem.txt
const fs = require("fs");

const fileName = "lorem.txt";

fs.unlink(fileName, (err) => {
  if (err) {
    console.log("Произошла ошибка");
  } else {
    console.log("Файл удалён");
  }
});
const text = "lorem ipsum :)";
const fs = require("fs");

fs.writeFile("./lorem.txt", text, () => {
  if (text) {
    console.log("Файл сохранён");
  } else {
    console.log("Произошла ошибка");
  }
});
