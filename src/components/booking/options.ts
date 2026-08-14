export const OPTIONAL_SERVICES = [
  "Ovn",
  "Køleskab",
  "Vinduer",
  "Emhætte",
  "Mikrobølgeovn",
  "Andre særlige ønsker",
] as const;

export const ADDON_FREQUENCIES = [
  "Kun én gang",
  "Hver 4. uge",
  "Hver 6. uge",
  "Hver 8. uge",
  "Hver 10. uge",
  "Hver 12. uge",
  "Efter behov",
] as const;

export const SERVICES = [
  "STILLE Essential",
  "STILLE Signature",
  "STILLE Housekeeping",
] as const;

export const BASE_FREQUENCIES = [
  "Hver uge",
  "Hver 2. uge",
  "Hver 3. uge",
  "Hver 4. uge",
  "Andet",
] as const;

export type AddonSelection = Record<string, string>;
