export type Data = Region[];

interface LocationBase {
  name?: string;
  nameEn?: string;
  level: number;
}

interface Region extends LocationBase {
  name: string;
  nameEn: string;
  level: 1;
  children?: Subregion[];
}

interface Subregion extends LocationBase {
  index: number;
  name?: string;
  nameEn?: string;
  level: 2;
  children?: Area[];
}

interface Area extends LocationBase {
  name: string;
  nameEn: string;
  level: 3;
  children?: Location[];
}

interface Location extends LocationBase {
  name: string;
  nameEn: string;
  level: number;
  children?: Location[];
}
