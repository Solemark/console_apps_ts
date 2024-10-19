export const checkPalindrome = (str: string): boolean => {
    let x: number = 0,
        y: number = str.length - 1;
    while (x < y) {
        if (str[x] != str[y]) return false;
        [x, y] = [x + 1, y - 1];
    }
    return true;
};
