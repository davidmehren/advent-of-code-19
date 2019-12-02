import * as fs from "fs";
import * as readline from "readline";

const lineReader = readline.createInterface({
    input: fs.createReadStream("input1.txt"),
});

let sum = 0;

lineReader.on("line", (mass: number) => {
    const fuel = Math.floor(mass / 3) - 2;
    sum = sum + fuel;
});

lineReader.on("close", () => {
    console.log("Sum: ", sum);
});
