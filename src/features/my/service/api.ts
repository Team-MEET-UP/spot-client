import api from "@/shared/api/api";

export const logout = async () => {
  const response = await api.post("/auth/logout");

  if (response.data.result === "SUCCESS") {
    return true;
  }

  throw new Error(response.data.error?.message || "로그아웃 실패");
};

export const changeName = async (nickname: string) => {
  const response = await api.patch("/users", null, {
    params: {
      nickname,
    },
  });

  if (response.data.result === "SUCCESS") {
    return nickname;
  }

  throw new Error(response.data.error?.message || "닉네임 변경 실패");
};

export const deleteAccount = async () => {
  const response = await api.delete("/users");

  if (response.data.result === "SUCCESS") {
    return true;
  }

  throw new Error(response.data.error?.message || "사용자 탈퇴 실패");
};
