import { useQuery } from "@tanstack/react-query";
import { getCookie } from "@/shared/utils";
import { getEventInfo } from "../service";
import { useSearchParams } from "react-router-dom";

export const useEventRoutes = () => {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("eventId");
  const startPointId = getCookie("startPointId");

  return useQuery({
    queryKey: ["eventRoutes", eventId, startPointId],
    queryFn: () => {
      if (!eventId) throw new Error("eventId가 없습니다.");
      return getEventInfo(eventId, startPointId);
    },
    enabled: !!eventId, // eventId가 있을 때만 요청
    staleTime: 1000 * 60 * 1, // 1분 캐싱
  });
};
