
import { Option, AspectRatio } from './types';

export const GENDERS: Option<string>[] = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
];

export const HAIR_COLORS: Option<string>[] = [
  { label: 'Fiery Red', value: 'Fiery Red' },
  { label: 'Electric Blue', value: 'Electric Blue' },
  { label: 'Neon Green', value: 'Neon Green' },
  { label: 'Shocking Pink', value: 'Shocking Pink' },
  { label: 'Vibrant Purple', value: 'Vibrant Purple' },
  { label: 'Sunburst Orange', value: 'Sunburst Orange' },
  { label: 'Cyber Yellow', value: 'Cyber Yellow' },
  { label: 'Icy White', value: 'Icy White' },
  { label: 'Silver Steel', value: 'Silver Steel' },
  { label: 'Aqua Teal', value: 'Aqua Teal' },
  { label: 'Crimson Magenta', value: 'Crimson Magenta' },
  { label: 'Cosmic Black', value: 'Cosmic Black with nebula highlights' },
];

export const NUM_CHARACTERS: Option<number>[] = [
  { label: '1 Character', value: 1 },
  { label: '2 Characters', value: 2 },
];

export const COSTUMES: Option<string>[] = [
  { label: 'Futuristic Techwear', value: 'Futuristic techwear with glowing neon accents' },
  { label: 'Gothic Combat', value: 'Gothic lolita combat dress with leather straps' },
  { label: 'Modern Street Ninja', value: 'Modern street ninja attire, sleek and dark' },
  { label: 'Dark Traditional', value: 'Traditional Hanbok with a dark, mystical twist' },
  { label: 'Steampunk Inventor', value: 'Steampunk inventor outfit with gears and brass' },
];

export const EYE_COLORS: Option<string>[] = [
  { label: 'Glowing Red', value: 'Glowing Red' },
  { label: 'Ice Blue', value: 'Ice Blue' },
  { label: 'Emerald Green', value: 'Emerald Green' },
  { label: 'Amethyst Purple', value: 'Amethyst Purple' },
  { label: 'Golden Yellow', value: 'Golden Yellow' },
  { label: 'Abyssal Black', value: 'Abyssal Black' },
];

export const WEAPONS: Option<string>[] = [
  { label: 'Energy Katana', value: 'a glowing energy katana' },
  { label: 'Dual Scythes', value: 'dual demonic scythes' },
  { label: 'Enchanted Pistols', value: 'a pair of ornate enchanted pistols' },
  { label: 'Chain Whip', value: 'a shadow-infused chain whip' },
  { label: 'Spirit Bow', value: 'a spectral spirit bow and arrow' },
  { label: 'Techno-Glaive', value: 'a high-tech techno-glaive' },
];

export const BACKGROUNDS: Option<string>[] = [
  { label: 'Neon Seoul Rooftop', value: 'on a neon-lit Seoul rooftop at night' },
  { label: 'Haunted Temple', value: 'inside an ancient, haunted temple' },
  { label: 'Cyberpunk Alley', value: 'in a dark, rain-slicked cyberpunk alleyway' },
  { label: 'Demonic Realm', value: 'in a desolate, chaotic demonic realm' },
  { label: 'Enchanted Forest', value: 'in an enchanted forest under a full moon' },
];

export const POSES: Option<string>[] = [
  { label: 'Standing', value: 'in a heroic standing pose' },
  { label: 'Sitting', value: 'sitting contemplatively on a ledge' },
  { label: 'Flying', value: 'levitating or flying mid-air with energy crackling' },
  { label: 'Crouching', value: 'crouching, ready to strike' },
  { label: 'Action Pose', value: 'in a dynamic action pose, mid-combat' },
];

export const ASPECT_RATIOS: Option<AspectRatio>[] = [
  { label: 'Square (1:1)', value: '1:1' },
  { label: 'Portrait (9:16)', value: '9:16' },
  { label: 'Landscape (16:9)', value: '16:9' },
  { label: 'Portrait (3:4)', value: '3:4' },
  { label: 'Landscape (4:3)', value: '4:3' },
];
