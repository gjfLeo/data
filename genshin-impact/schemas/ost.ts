export interface GenshinImpactOSTData {
  albums: GenshinImpactOSTAlbum[];
}

interface GenshinImpactOSTAlbum {
  name: string;
  nameEn: string;
  releaseDate: string;
  discs: GenshinImpactOSTSingleDisc | GenshinImpactOSTDisc[];
}

interface GenshinImpactOSTSingleDisc {
  songs: GenshinImpactOSTSong[];
}
interface GenshinImpactOSTDisc {
  number: number;
  name: string;
  nameEn: string;
  songs: GenshinImpactOSTSong[];
}

interface GenshinImpactOSTSong {
  number: number;
  name: string;
  nameEn: string;
  credits: GenshinImpactOSTSongCredits;
  usages: GenshinImpactOSTSongUsages;
  links: GenshinImpactOSTSongLinks;
  notes?: string | string[];
  related?: string[];
}

type MaybeArray<T> = T | T[];

interface GenshinImpactOSTSongUsages {
  world?: {
    location?: string | string[];
    area?: string;
    region: string;
    condition?: MaybeArray<"DAY" | "NIGHT" | "RAIN" | "COMBAT" | "WAVERIDER">;
  }[];
  domain?: {
    domain: string;
    type: "CHALLENGE" | "TROUNCE" | "ONE-TIME" | "ABYSS" | "QUEST" | "EVENT";
    condition?: "COMBAT";
  }[];
  quest?: {
    type: "ARCHON" | "STORY" | "EVENT";
    chapter: string;
    act: string;
    part?: string | string[];
  }[];
  spincrystal?: number;
  special?: string;
  video?: {
    name: string;
    bilibiliBv: string;
  }
}

interface GenshinImpactOSTSongCredits {
  /** 作曲 */
  composer?: GenshinImpactOSTSongCreditStaff;
  /** 作词 */
  lyricist?: GenshinImpactOSTSongCreditStaff;
  /** 编曲 */
  arranger?: GenshinImpactOSTSongCreditStaff;

  /** 指挥 */
  conductor?: string;
  /** 乐队 */
  orchestra?: string;
  /** 乐队配器 */
  orchestrator?: string;

  [k: string]: GenshinImpactOSTSongCreditStaff;
}
type GenshinImpactOSTSongCreditStaff = string | string[];

interface GenshinImpactOSTSongLinks {
  qqId?: string;
  necId?: number;
}
