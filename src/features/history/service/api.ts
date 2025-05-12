import api from "@/shared/api/api";

export const getUserInfo = async () => {
  const response = await api.get("/users");
  if (response.data.result === "SUCCESS") {
    return response.data.data;
  } else {
    console.error("서버 에러 발생", response.data.error.message);
    throw new Error(response.data.error.message);
  }
};

export const storeUserAgreement = async ({
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
};
