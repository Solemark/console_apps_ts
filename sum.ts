export const red_array = (a: number[]): number => a.reduce((x, y) => x + y);

export const rec_sum = (n: number, result: number): number => {
    if (n <= 0) return result;
    else return rec_sum(n - 1, result + n);
};

export const rec_array = (arr: number[], n: number, result: number): number => {
    if (n < 0) return result;
    return rec_array(arr, n - 1, result + arr[n]);
};
