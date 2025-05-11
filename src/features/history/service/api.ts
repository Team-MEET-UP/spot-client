import api from "@/shared/api/api";
import { useMutation, useQuery } from "@tanstack/react-query";

interface UserInfo {
  userId: number;
  nickname: string;
  profileImageUrl: string;
  personalInfoAgreement: boolean;
  marketingAgreement: boolean;
}

export const useUserInfo = () => {
  return useQuery<UserInfo>({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await api.get("/users");
      if (response.data.result === "SUCCESS") {
        return response.data.data;
      } else {
        console.error("서버 에러 발생", response.data.error.message);
        throw new Error(response.data.error.message);
      }
    },
    retry: 2, // 실패 시 최대 두 번 재시도
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐시 유지
  });
};

export const useStoreAgreement = () => {
  return useMutation({
    mutationFn: async ({
      isPersonalInfoAgreement,
      isMarketingAgreement,
    }: {
      isPersonalInfoAgreement: boolean;
      isMarketingAgreement: boolean;
    }) => {
      const response = await api.post("/users/agreement", {
        isPersonalInfoAgreement,
        isMarketingAgreement,
      });

      if (response.data.result === "SUCCESS") {
        return true;
      } else {
        console.error("서버 에러 발생", response.data.error.message);
        throw new Error(response.data.error.message);
      }
    },
    onError: error => {
      console.error("약관 동의 저장 실패: ", error);
    },
  });
};
