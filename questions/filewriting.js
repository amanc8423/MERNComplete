const fs = require("fs");

const ws = fs.createWriteStream("prime.txt");

let p = 0;

for (let i = 2; i < 1000; i++) {
  console.log("hello");
  let count = 0;

  for (let j = 2; j < i / 2; j++) {
    if (i % j == 0) count++;
  }

  if (count == 0) {
    ws.write(i.toString() + "\n");
    p++;
  }

  if (p == 100) {
    console.log(p);
    break;
  }
}
