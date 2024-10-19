export const gachaRoll = (game: string): string => {
    let rollCount: number = 0,
        chance: number = 0,
        pity: number = 0,
        rarity: string = "";

    switch (game) {
        case "FGO":
            chance = 100;
            pity = 300;
            rarity = "5*";
            break;
        case "AK":
            chance = 50;
            pity = 100;
            rarity = "6*";
            break;
        case "GI":
            chance = 167;
            pity = 90;
            rarity = "5*";
            break;
    }

    while (true) {
        rollCount++;
        const c: number = Math.floor(Math.random() * chance + 1);
        if (c == 1) {
            return `It took ${rollCount} rolls to get a ${rarity} in ${game}`;
        }
        if (rollCount == pity) {
            if (game == "AK" && rollCount > 50) chance++;
            return `You hit pity at ${pity} for your ${rarity} on ${game}`;
        }
    }
};
