// Types for JSON data
export interface ThangkaJSON {
  id: string;
  name: string;
  nameEn: string;
  buddha: string;
  type: "wearable" | "large";
  typeCn: string;
  image: string;
  size: string;
  year: string;
  description: string;
}

export interface BuddhaJSON {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  introduction: string;
  symbolism: string;
  mantra: string;
}

export interface ZodiacJSON {
  animal: string;
  animalCn: string;
  emoji: string;
  buddhaId: string;
  buddhaCn: string;
  buddhaEn: string;
}

// Composed type used by components (thangka + buddha info merged)
export interface Thangka {
  id: string;
  name: string;
  nameCn: string;
  deity: string;
  deityCn: string;
  type: "wearable" | "large";
  typeCn: string;
  size: string;
  year: string;
  image: string;
  description: string;
  deityInfo: {
    introduction: string;
    symbolism: string;
    mantra: string;
  };
}

export interface Deity {
  id: string;
  name: string;
  nameCn: string;
  description: string;
}

const IMAGE_BASE = "/images/normal/";

async function fetchJSON<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return res.json();
}

export async function fetchThangkas(): Promise<Thangka[]> {
  const [thangkasRaw, buddhasRaw] = await Promise.all([
    fetchJSON<ThangkaJSON[]>("/data/thangkas.json"),
    fetchJSON<BuddhaJSON[]>("/data/buddhas.json"),
  ]);

  const buddhaMap = new Map(buddhasRaw.map((b) => [b.id, b]));

  return thangkasRaw.map((t) => {
    const buddha = buddhaMap.get(t.buddha);
    return {
      id: t.id,
      name: t.nameEn,
      nameCn: t.name,
      deity: buddha?.nameEn ?? t.buddha,
      deityCn: buddha?.name ?? t.buddha,
      type: t.type,
      typeCn: t.typeCn,
      size: t.size,
      year: t.year,
      image: IMAGE_BASE + t.image,
      description: t.description,
      deityInfo: {
        introduction: buddha?.introduction ?? "",
        symbolism: buddha?.symbolism ?? "",
        mantra: buddha?.mantra ?? "",
      },
    };
  });
}

export async function fetchBuddhas(): Promise<Deity[]> {
  const raw = await fetchJSON<BuddhaJSON[]>("/data/buddhas.json");
  return raw.map((b) => ({
    id: b.id,
    name: b.nameEn,
    nameCn: b.name,
    description: b.description,
  }));
}

export async function fetchZodiac(): Promise<ZodiacJSON[]> {
  return fetchJSON<ZodiacJSON[]>("/data/zodiac.json");
}
