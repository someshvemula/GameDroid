import { Platform } from "./Platform";

export interface Result {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}
