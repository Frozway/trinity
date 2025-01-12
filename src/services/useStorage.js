import {create} from "zustand";

export const initSound = new Audio('./sounds/launch.mp3');
initSound.volume = 0.5;

export const mainClick = new Audio('./sounds/mainClick.wav');
mainClick.volume = 0.2;

export const secondClick = new Audio('./sounds/secondaryClick.wav');
secondClick.volume = 0.2;

export default create((set) => ({
  isStarted: true,
  setIsStarted: (value) => set({isStarted: value}),
}));