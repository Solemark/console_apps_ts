export const outputTable = (a: number, max: number): string => {
    let b: number = 0;
    let arr: string = "";
    while (b <= max) {
        arr += `${a} x ${b} = ${a * b}`;
        if (b < max) {
            arr += "\n";
        }
        b++;
    }
    return arr;
};
