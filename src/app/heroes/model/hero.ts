export interface Hero {
    id: string;
    name: string;
    race: string;
    created_at: Date;
    updated_at: Date;
    enabled: string
    power_stats: {
        strength: number,
        agility: number,
        dexterity: number,
        intelligence: number,
    }
}
