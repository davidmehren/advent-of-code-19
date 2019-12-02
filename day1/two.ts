import * as fs from "fs";
import * as readline from "readline";

const lineReader = readline.createInterface({
    input: fs.createReadStream("input1.txt"),
});

let sum = 0;

function calculateFuel(mass: number): number {
    const fuel = Math.floor(mass / 3) - 2;
    if (fuel < 0) { return 0; }
    return fuel + calculateFuel(fuel);

}

lineReader.on("line", (mass: number) => {
    const fuel = calculateFuel(mass);
    sum = sum + fuel;
});

lineReader.on("close", () => {
    console.log("Sum: ", sum);
});
