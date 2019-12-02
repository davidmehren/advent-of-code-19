import * as fs from "fs";

const lines: string[] = fs.readFileSync("input1.txt").toString().split("\n");
let sum = 0;
for (const mass of lines) {
    const fuel = Math.floor(Number(mass) / 3) - 2;
    sum = sum + fuel;
}
console.log("Sum: ", sum);
