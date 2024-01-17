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

interface GenshinImpactOSTSongUsages {
  world?: {
    location?: string | string[];
    area?: string;
    region: string;
    time?: "DAY" | "NIGHT";
    weather?: "RAIN";
  }[];
  worldCombat?: {
    location?: string | string[];
    area?: string;
    region: string;
  }[];
  domain?: string[];
  domainCombat?: string[];
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
