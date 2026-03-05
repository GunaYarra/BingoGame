export type ThemeId = "creative";

export interface Theme {
  id: ThemeId;
  name: string;
  description: string;
}

export const THEMES: Theme[] = [
  {
    id: "creative",
    name: "Creative Bingo",
    description: "Music, art, design tastes, and creative skills",
  },
];

