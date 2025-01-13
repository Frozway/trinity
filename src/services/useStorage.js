import {create} from "zustand";

export const initSound = new Audio('./sounds/launch.mp3');
initSound.volume = 1;

export const mainClick = new Audio('./sounds/secondaryClick.wav');
mainClick.volume = 0.2;

export const secondClick = new Audio('./sounds/mainClick.wav');
secondClick.volume = 0.2;

export default create((set) => ({
  isStarted: false,
  isAnimating: false,
  setIsStarted: (value) => set({isStarted: value}),
  setIsAnimating: (value) => set({isAnimating: value}),
}));