export const negative = (arr: number[]): number[] => arr.filter((i) => i >= 0);
export const positive = (arr: number[]): number[] => arr.filter((i) => i <= 0);
export const odds = (arr: number[]): number[] => arr.filter((i) => i % 2 != 0);
export const even = (arr: number[]): number[] => arr.filter((i) => i % 2 == 0);
