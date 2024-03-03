export type Data = Location[];

interface Location {
  name?: string;
  nameEn?: string;
  level: number;
  children?: Location[];
}
