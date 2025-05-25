import { useMutation } from "@tanstack/react-query";
import { changeName } from "@/features/my/service";
import { useUserStore } from "@/shared/stores";

export const useChangeName = () => {
  return useMutation({
    mutationFn: (nickname: string) => changeName(nickname),
    onSuccess: async (nickname: string) => {
      useUserStore.getState().setNickname(nickname);
    },
    onError: error => {
      console.error("닉네임 변경 실패", error);
    },
  });
};
