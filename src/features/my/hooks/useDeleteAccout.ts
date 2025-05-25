import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../service";

export const UseDeleteAccount = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      navigate("/");
      localStorage.removeItem("user-storage");
    },
    onError: error => {
      console.error("탈퇴 실패: ", error);
    },
  });
};
