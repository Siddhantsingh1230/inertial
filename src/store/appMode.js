import { create } from "zustand";
import { checkSystemMode, changeLocalSystemMode } from "../utils/Mode.js";

const useAppMode = create((set) => ({
  mode: checkSystemMode(), // false means Light mode , true means Dark Mode
  changeAppMode: (newMode) => {
    set((state) => ({ mode: newMode }));
    changeLocalSystemMode(newMode);
  },
}));

export default useAppMode;
