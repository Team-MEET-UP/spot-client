import api from "@/shared/api/api";
import { PlaceList } from "../model";

export const getRecommendedPlaces = async (eventId: string) => {
  const response = await api.get<PlaceList>("/places", {
    params: { eventId },
  });
  return response.data;
};
