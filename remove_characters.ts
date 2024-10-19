export const removeCharacters = (str: string, letters: string[]): string => {
    letters.forEach((letter) => {
        str = str.replace(new RegExp(letter, "gi"), "");
    });
    return str;
};
export const removeSpaces = (str: string): string => str.split(" ").join("");
