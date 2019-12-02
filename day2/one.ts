import * as fs from "fs";
import * as util from "util";

const lines: string[] = fs.readFileSync("input1.txt").toString().split("\n");

function parseProgram(line: string): number[] {
    return line.split(",").map((str) => Number(str));
}

function getOperands(data: number[], index: number): [number, number, number] {
    return [data[index + 1], data[index + 2], data[index + 3]];
}

function getOpcode(data: number[], index: number): number {
    return data[index];
}

function runProgram(data: number[]) {
    let programCounter = 0;
    while (true) {
        console.debug("pc:", programCounter);
        console.debug("inst:", data[programCounter]);
        switch (getOpcode(data, programCounter)) {
            case 1: {
                const [op1Addr, op2Addr, targetAddr] = getOperands(data, programCounter);
                console.debug("data[", targetAddr, "] =", data[op1Addr], "+", data[op2Addr]);
                data[targetAddr] = data[op1Addr] + data[op2Addr];
                programCounter = programCounter + 4;
                break;
            }

            case 2: {
                const [op1Addr, op2Addr, targetAddr] = getOperands(data, programCounter);
                console.debug("data[", targetAddr, "] =", data[op1Addr], "*", data[op2Addr]);
                data[targetAddr] = data[op1Addr] * data[op2Addr];
                programCounter = programCounter + 4;
                break;
            }

            case 99:
                console.debug("Finished.");
                console.log(util.inspect(data, { maxArrayLength: null }));
                return data[0];
        }
    }
}

for (const line of lines) {
    if (line.length > 0) {
        const data: number[] = parseProgram(line);
        console.log("Result:", runProgram(data));
    }
}
