import { useQuery } from "@tanstack/react-query";
import { getReviewPlace } from "../service/api";

export const useReviewPlace = (eventId: string) => {
  return useQuery({
    queryKey: ["reviewPlace", eventId],
    queryFn: () => getReviewPlace(eventId),
    enabled: !!eventId,
  });
};
