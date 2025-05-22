import api from "@/shared/api/api";
import { VisitedReviewPayload } from "../model";

export const postVisitedReview = async (placeId: string, payload: VisitedReviewPayload) => {
  const { data } = await api.post(`/places/${placeId}/reviews/visited`, payload);
  return data;
};
