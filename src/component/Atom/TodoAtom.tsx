import { atom } from "jotai";

export interface Task {
  text: string;
  category: string;
  done: boolean;
  id: number;
}

export const categoryAtom = atom("All Tasks");

export const tasksAtom = atom<Task[]>([]);

export const newtasksAtom = atom<string>("");
