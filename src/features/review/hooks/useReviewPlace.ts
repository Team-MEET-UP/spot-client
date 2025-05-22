import { useQuery } from "@tanstack/react-query";
import { getReviewPlace } from "../service/api";
import { ReviewPlaceResponse } from "../model";

export const useReviewPlace = (eventId: string) => {
  return useQuery<ReviewPlaceResponse>({
    queryKey: ["reviewPlace", eventId],
    queryFn: () => getReviewPlace(eventId),
    enabled: !!eventId,
  });
};
