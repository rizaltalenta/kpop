
export interface Option<T> {
  label: string;
  value: T;
}

export type AspectRatio = "1:1" | "16:9" | "9:16" | "4:3" | "3:4";

export interface CustomizationOptions {
  gender: string;
  gender2?: string;
  hairColor: string;
  numCharacters: number;
  costume: string;
  eyeColor: string;
  weapon: string;
  background: string;
  pose: string;
  aspectRatio: AspectRatio;
}
