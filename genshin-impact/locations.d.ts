export type Data = Location[];

interface Location {
  index?: number;
  name?: string;
  nameEn?: string;
  level: number;
  children?: Location[];
}
