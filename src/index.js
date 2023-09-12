const figlet = require("figlet");
const fs = require("fs");

fs.readFile("./text.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
    console.log(err);
    return;
  }

  figlet(data, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
});
