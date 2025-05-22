import api from "@/shared/api/api";
import { NonVisitedReviewRequest } from "../model";

export const postNonVisitedReview = async (placeId: string, data: NonVisitedReviewRequest) => {
  const response = await api.post(`/places/${placeId}/reviews/non-visited`, data);
  return response.data;
};
