export interface Data {
  locations: Location[];
}

interface Location {
  name?: string;
  nameEn?: string;
  level: number;
  children?: Location[];
}
