import api from "@/shared/api/api";
import { ReviewPlaceResponse } from "../model";

export const getReviewPlace = async (eventId: string): Promise<ReviewPlaceResponse> => {
  const { data } = await api.get("/places/review", {
    params: { eventId },
  });
  return data.data;
};
