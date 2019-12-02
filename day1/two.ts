import * as fs from "fs";

function calculateFuel(mass: number): number {
    const fuel = Math.floor(mass / 3) - 2;
    if (fuel < 0) {
        return 0;
    }
    return fuel + calculateFuel(fuel);

}

const lines: string[] = fs.readFileSync("input1.txt").toString().split("\n");
let sum = 0;
for (const mass of lines) {
    const fuel = calculateFuel(Number(mass));
    sum = sum + fuel;
}
console.log("Sum: ", sum);
