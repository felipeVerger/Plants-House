// GetAllCategories Response
export interface AllCategories {
    categories: CategoryType[]
}

export type CategoryType = {
    Category: string
}

// GetByCategory Response
export interface ByCategory {
    Categories: CategoryName;
    Climat: Climat;
    "Common name": string[] | null;
    "Common name (fr.)": null | string;
    Description: null;
    Family: string;
    Img: string;
    "Latin name": string;
    Origin: string[] | null;
    "Other names": null | string;
    Zone: string[];
    id: string;
}

export enum CategoryName {
    Fern = "Fern",
}

export enum Climat {
    Subtropical = "Subtropical",
    Tropical = "Tropical",
    TropicalHumid = "Tropical humid",
}

export interface RootObject {
    Appeal: string;
    Avaibility: string;
    "Available sizes (Pot)": string;
    Bearing: string;
    "Blooming season": string;
    Categories: string;
    Climat: string;
    "Color of blooms": string;
    "Color of leaf": string[];
    "Common name": string[];
    "Common name (fr.)": string;
    Description: null;
    Disease: string;
    Family: string;
    Growth: string;
    "Height at purchase": HeightAtPurchase;
    "Height potential": HeightAtPurchase;
    Img: string;
    Insects: string[];
    "Latin name": string;
    "Light ideal": string;
    "Light tolered": string;
    Origin: string[];
    "Other names": null;
    Perfume: null;
    "Pot diameter (cm)": HeightAtPurchase;
    Pruning: string;
    Style: string;
    "Temperature max": TemperatureM;
    "Temperature min": TemperatureM;
    Url: string;
    Use: string[];
    Watering: string;
    "Width at purchase": HeightAtPurchase;
    "Width potential": HeightAtPurchase;
    Zone: string[];
    id: string;
}

export interface HeightAtPurchase {
    CM: number;
    M: number;
}

export interface TemperatureM {
    C: number;
    F: number;
}