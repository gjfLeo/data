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
  usages?: GenshinImpactOSTSongUsage[];
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
  quest?: GenshinImpactOSTSongUsageQuest
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
  }
}
type GenshinImpactOSTSongUsageQuest = string;