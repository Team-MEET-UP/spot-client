import api from "@/shared/api/api";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await api.post("/auth/logout");
      if (response.data.result === "SUCCESS") {
        return true;
      } else {
        console.error("서버 에러 발생", response.data.error.message);
        throw new Error(response.data.error.message);
      }
    },
    onError: error => {
      console.error("로그아웃 실패: ", error);
    },
  });
};
