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

type GenshinImpactOSTAlbum = GenshinImpactOSTAlbumWithDiscs | GenshinImpactOSTAlbumWithoutDiscs;

interface GenshinImpactOSTDisc {
    name: string;
    nameEn: string;
    songs: GenshinImpactOSTSong[];
}

interface GenshinImpactOSTSong {
    name: string;
    nameEn: string;
}
