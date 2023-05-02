// GetAllCategories Response
export interface AllCategories {
    categories: CategoryType[]
}

export type CategoryType = {
    Category: string
}

// GetByCategory Response
export interface ByCategory {
    Categories:          CategoryName;
    Climat:              Climat;
    "Common name":       string[] | null;
    "Common name (fr.)": null | string;
    Description:         null;
    Family:              string;
    Img:                 string;
    "Latin name":        string;
    Origin:              string[] | null;
    "Other names":       null | string;
    Zone:                string[];
    id:                  string;
   }
   
   export enum CategoryName {
    Fern = "Fern",
   }
   
   export enum Climat {
    Subtropical = "Subtropical",
    Tropical = "Tropical",
    TropicalHumid = "Tropical humid",
   }
   