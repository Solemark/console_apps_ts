export const checkTime = (): string => {
    const date = new Date();
    let output = "";
    output += `day: ${checkDay(date.getDay())}\n`;
    output += `date: ${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()}\n`;
    output += `time: ${getCurrentTime(date)}`;
    return output;
};

export const getCurrentTime = (date: Date): string => {
    let output = "";
    if (date.getHours() > 12) output += date.getHours() - 12;
    else output += date.getHours();
    output += ":" + date.getMinutes();
    return output;
};

export const checkDay = (day: number): string => {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        default:
            return "Saturday";
    }
};
