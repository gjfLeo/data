export interface Data {
  albums: GenshinImpactOSTAlbum[];
}

interface GenshinImpactOSTAlbum {
  name: string;
  nameEn: string;
  releaseDate: string;
  discs: [GenshinImpactOSTSingleDisc] | GenshinImpactOSTDisc[];
}

interface GenshinImpactOSTSingleDisc {
  number: 1;
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

interface GenshinImpactOSTSongLinks {
  qqId?: string;
  necId?: number;
}


interface GenshinImpactOSTSongUsages {
  world?: {
    location?: string | string[];
    area?: string;
    region: string;
    condition?: ("DAY" | "NIGHT" | "RAIN" | "COMBAT" | "WAVERIDER") | ("DAY" | "NIGHT" | "RAIN" | "COMBAT" | "WAVERIDER")[];
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
  composer: GenshinImpactOSTSongCreditStaff;
  /** 作词 */
  lyricist?: GenshinImpactOSTSongCreditStaff;
  /** 编曲 */
  arranger?: GenshinImpactOSTSongCreditStaff;

  /** 指挥 */
  conductor?: GenshinImpactOSTSongCreditStaff;
  /** 乐队 */
  orchestra?: GenshinImpactOSTSongCreditStaff;
  /** 乐队配器 */
  orchestrator?: GenshinImpactOSTSongCreditStaff;

  [k: string]: GenshinImpactOSTSongCreditStaff;
}
type GenshinImpactOSTSongCreditStaff = string | string[];

