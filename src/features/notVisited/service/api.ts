import api from "@/shared/api/api";
import { NonVisitedReviewRequest } from "../model";

export const postNonVisitedReview = async (eventId: string, placeId: string, data: NonVisitedReviewRequest) => {
  const response = await api.post(`/places/${placeId}/reviews/non-visited`, data, {
    params: {
      eventId,
      placeId,
    },
  });

  if (response.data.result === "SUCCESS") {
    return response.data.data;
  }

  throw new Error(response.data.error?.message || "미방문 리뷰 작성 실패");
};
