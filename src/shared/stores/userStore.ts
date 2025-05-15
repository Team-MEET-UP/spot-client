import { create } from "zustand";

interface UserState {
  nickname: string;
  profileImageUrl: string;
  email: string;
  setNickname: (nickname: string) => void;
  setProfileImgUrl: (url: string) => void;
  setEmail: (email: string) => void;
}

export const useUserStore = create<UserState>(set => ({
  nickname: "",
  profileImageUrl: "",
  email: "",
  setNickname: nickname => set({ nickname }),
  setProfileImgUrl: url => set({ profileImageUrl: url }),
  setEmail: email => set({ email }),
}));
