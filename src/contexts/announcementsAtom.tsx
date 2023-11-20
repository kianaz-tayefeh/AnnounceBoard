import { atom } from "jotai";
import { IAnnouncement } from "src/interfaces/IAnnouncement";

export const announcementsAtom = atom<IAnnouncement[] | null>([]);
