import api from "@/shared/api/api";
import { GetEventRouteResponse } from "@/shared/model";

export const getEventInfo = async (eventId: string, startPointId?: string) => {
  try {
    const response = await api.get<{
      result: string;
      data: GetEventRouteResponse;
      error?: {
        code: string;
        message: string;
      };
    }>(`/events/${eventId}`, {
      params: startPointId ? { startPointId } : {},
    });

    return response.data.data;
  } catch (error) {
    console.error("모임 경로 조회 실패:", error);
    throw error;
  }
};
