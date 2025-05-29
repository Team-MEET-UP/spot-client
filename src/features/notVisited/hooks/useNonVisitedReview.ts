import { useMutation } from "@tanstack/react-query";
import { NonVisitedReviewRequest } from "../model";
import { postNonVisitedReview } from "../service";

export const usePostNonVisitedReview = () => {
  return useMutation({
    mutationFn: ({ eventId, placeId, data }: { eventId: string; placeId: string; data: NonVisitedReviewRequest }) =>
      postNonVisitedReview(eventId, placeId, data),
  });
};
