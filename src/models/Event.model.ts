import { Organizer } from ".";

export interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  cover: string;
  organizer?: Organizer;
  lineup: string[];
  likeCount: number;
}
