export type Data = OstAlbum[];

interface OstAlbum {
  name: string;
  nameEn: string;
  releaseDate: string;
  discs: [OstDiscSingle] | OstDisc[];
}

interface OstDiscSingle {
  number: 0;
  soundtracks: OstSoundtrack[];
}
interface OstDisc {
  number: 1 | 2 | 3 | 4;
  name: string;
  nameEn: string;
  soundtracks: OstSoundtrack[];
}

interface OstSoundtrack {
  number: number;
  name: string;
  nameEn: string;
  credits?: OstSoundtrackCredits;
  usages?: OstSoundtrackUsages;
  refs?: OstSoundtrackRefs;
  // notes?: string | string[];
  // related?: string[];
}

interface OstSoundtrackRefs {
  qq?: string;
  nec?: number;
}

interface OstSoundtrackUsages {
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
    type: "ARCHON" | "STORY" | "EVENT" | "WORLD";
    chapter: string;
    act: string;
    part?: string | string[];
  }[];
  spincrystal?: number;
  special?: string;
  video?: {
    name: string;
    links?: {
      bilibili?: string;
    };
  };
}

interface OstSoundtrackCredits {
  /** 作曲 */
  composer: OstSoundtrackCreditStaff;
  /** 作词 */
  lyricist?: OstSoundtrackCreditStaff;
  /** 编曲 */
  arranger?: OstSoundtrackCreditStaff;

  /** 指挥 */
  conductor?: OstSoundtrackCreditStaff;
  /** 乐队 */
  orchestra?: OstSoundtrackCreditStaff;
  /** 乐队配器 */
  orchestrator?: OstSoundtrackCreditStaff;

  [k: string]: OstSoundtrackCreditStaff;
}
type OstSoundtrackCreditStaff = string | string[];
