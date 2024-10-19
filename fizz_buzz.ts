export const fizzBuzz = (max: number, fizz: number, buzz: number): string => {
    let output: string = "";
    for (let i: number = 1; i <= max; i++) {
        if (i % fizz == 0) output += "fizz";
        if (i % buzz == 0) output += "buzz";
        if (output[output.length - 1] != "z") output += i;
        output += "\n";
    }
    return output;
};
