import api from "@/shared/api/api";

interface SearchStartPointParams {
  textQuery: string;
}

interface StartPoint {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

export const searchStartPoints = async (params: SearchStartPointParams): Promise<StartPoint[]> => {
  const response = await api.get("/start-points/search", {
    params: { textQuery: params.textQuery },
  });
  return response.data;
};
