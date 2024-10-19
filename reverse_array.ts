// deno-lint-ignore-file no-explicit-any
export const same_arr = (arr: any[]): any[] => {
    for (let i: number = 0, j: number = arr.length - 1; i < j; i++, j--) {
        const x = arr[i],
            y = arr[j];
        [arr[j], arr[i]] = [x, y];
    }
    return arr;
};
