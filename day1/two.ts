import * as readline from "readline";
import * as fs from "fs";

const lineReader = readline.createInterface({
    input: fs.createReadStream('input1.txt')
});

let sum = 0;

function calculateFuel(mass: number): number {
    let fuel = Math.floor(mass / 3) - 2;
    if (fuel < 0) {
        return 0;
    } else {
        return fuel + calculateFuel(fuel);
    }

}

lineReader.on('line', (mass: number) => {
    let fuel = calculateFuel(mass);
    sum = sum + fuel;
});

lineReader.on('close', () => {
    console.log("Sum: ", sum);
});
