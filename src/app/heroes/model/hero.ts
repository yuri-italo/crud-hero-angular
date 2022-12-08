export interface Hero {
    id: string;
    name: string;
    race: string;
    power_stats: {
        strength: number,
        agility: number,
        dexterity: number,
        intelligence: number
    }
}
