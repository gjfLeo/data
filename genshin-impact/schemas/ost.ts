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
  index: number;
  name: string;
  nameEn: string;
  credits?: GenshinImpactOSTSongCredits;
  usages?: GenshinImpactOSTSongUsage[];
  notes?: string | string[];
  related?: string[];
}

type GenshinImpactOSTSongUsage =
  | GenshinImpactOSTSongUsageWorld
  | GenshinImpactOSTSongUsageWorldBattle
  | GenshinImpactOSTSongUsageBossBattle
  | GenshinImpactOSTSongUsageDialog
  | GenshinImpactOSTSongUsageUI
  | GenshinImpactOSTSongUsageVideo;
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
    bilibiliBv: string;
  };
}
type GenshinImpactOSTSongUsageQuest = string;

interface GenshinImpactOSTSongCredits {
  /** 作曲 */
  composer?: GenshinImpactOSTSongCreditInfo;
  /** 作词 */
  lyricist?: GenshinImpactOSTSongCreditInfo;
  /** 编曲 */
  arranger?: GenshinImpactOSTSongCreditInfo;

  /** 指挥 */
  conductor?: string;
  /** 乐队 */
  orchestra?: string;
  /** 乐队配器 */
  orchestrator?: string;
  /** 演唱 */
  voice?: string;
  /** 演唱 */
  vocalArtist?: string;
  /** 合唱 */
  choir?: GenshinImpactOSTSongCreditInfo;

  /** 钢琴 */
  piano?: string;
  /** 原声吉他 */
  acousticGuitar?: string;
  /** 电吉他 */
  electricGuitar?: string;
  /** 二胡 */
  erhu?: string;
  /** 古筝 */
  guzheng?: string;
  /** 尺八 */
  shakuhachi?: string;
  /** 玻璃琴 */
  glassHarmonica?: string;
  /** 乐杯 */
  glassHarp?: string;
}
type GenshinImpactOSTSongCreditInfo = string | string[];
