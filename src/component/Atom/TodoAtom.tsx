import { atom } from "jotai";

export interface Task {
  text: string;
  category: string;
  done: boolean;
  id: number;
}

export const categoryAtom = atom("All Tasks");

export const taskAtom = atom<Task[]>([]);

export const newTaskAtom = atom<string>();
