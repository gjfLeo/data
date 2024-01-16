export interface GenshinImpactOSTData {
  albums: GenshinImpactOSTAlbum[];
}

interface GenshinImpactOSTAlbumBase {
  name: string;
  nameEn: string;
  releaseDate: string;
}

interface GenshinImpactOSTAlbumWithoutDiscs extends GenshinImpactOSTAlbumBase {
  songs: GenshinImpactOSTSong[];
}
interface GenshinImpactOSTAlbumWithDiscs extends GenshinImpactOSTAlbumBase {
  discs: GenshinImpactOSTDisc[];
}

type GenshinImpactOSTAlbum =
  | GenshinImpactOSTAlbumWithDiscs
  | GenshinImpactOSTAlbumWithoutDiscs;

interface GenshinImpactOSTDisc {
  name: string;
  nameEn: string;
  songs: GenshinImpactOSTSong[];
}

interface GenshinImpactOSTSong {
  number: number;
  name: string;
  nameEn: string;
  credits: GenshinImpactOSTSongCredits;
  usages: GenshinImpactOSTSongUsage[];
  links: GenshinImpactOSTSongLinks;
  notes?: string | string[];
  related?: string[];
}

type GenshinImpactOSTSongUsage =
  | GenshinImpactOSTSongUsageWorld
  | GenshinImpactOSTSongUsageWorldBattle
  | GenshinImpactOSTSongUsageBossBattle
  | GenshinImpactOSTSongUsageDialog
  | GenshinImpactOSTSongUsageUI
  | GenshinImpactOSTSongUsageVideo
  | GenshinImpactOSTSongUsageSpincrystal;
interface GenshinImpactOSTSongUsageWorld {
  type: "WORLD";
  area: string;
  time?: "DAYTIME" | "NIGHTTIME";
  timeDuration?: string;
  weather?: "RAIN";
}
interface GenshinImpactOSTSongUsageWorldBattle {
  type: "WORLD_BATTLE";
  area: string;
}
interface GenshinImpactOSTSongUsageBossBattle {
  type: "BOSS_BATTLE";
  domain: string;
  boss: string;
}
interface GenshinImpactOSTSongUsageDialog {
  type: "DIALOG";
  quest?: GenshinImpactOSTSongUsageQuest;
  description?: string;
}
interface GenshinImpactOSTSongUsageUI {
  type: "UI";
  description?: string;
}
interface GenshinImpactOSTSongUsageVideo {
  type: "VIDEO";
  videoType: "CG" | "PV";
  quest?: GenshinImpactOSTSongUsageQuest;
  description?: string;
  video?: {
    name: string;
    bilibiliBv?: string;
  };
}
type GenshinImpactOSTSongUsageQuest = string;
interface GenshinImpactOSTSongUsageSpincrystal {
  type: "SPINCRYSTAL";
  number: number;
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
