export const sortRecursive = (arr: number[], c: number): number[] => {
    if (c >= arr.length) return arr;
    else {
        const x = arr[c],
            y = arr[c + 1];
        if (x > y) {
            [arr[c], arr[c + 1]] = [y, x];
            return sortRecursive(arr, c - 1);
        }
        return sortRecursive(arr, c + 1);
    }
};
