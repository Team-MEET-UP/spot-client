import api from "@/shared/api/api";

export const getPlaceInfo = async ({ placeId, eventId }: { placeId: string; eventId: string }) => {
  try {
    const response = await api.get(`places/${placeId}`, { params: { placeId, eventId } });
    if (response.data.result === "SUCCESS") {
      return response.data.data;
    } else {
      console.error("장소 정보 조회 실패 : ", response.data.error.message);
      throw new Error(response.data.error.message);
    }
  } catch (error) {
    console.error("서버 에러 : ", error);
  }
};

export const postPlaceInfo = async ({ placeId, eventId }: { placeId: string; eventId: string }) => {
  try {
    const response = await api.post(`/places/${placeId}`, null, { params: { placeId, eventId } });

    if (response.data.result === "SUCCESS") {
      return true;
    } else {
      console.error("모임 장소 확정 및 변경 실패 : ", response.data.error.message);
      throw new Error(response.data.error.message);
    }
  } catch (error) {
    console.error("서버 에러 : ", error);
  }
};
