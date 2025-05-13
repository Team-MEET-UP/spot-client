import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { GetEventRouteResponse } from "../model";

interface EventStoreState {
  eventData: GetEventRouteResponse | null;
  setEventData: (data: GetEventRouteResponse) => void;
  clearEventData: () => void;
}

export const useEventStore = create<EventStoreState>()(
  devtools(set => ({
    eventData: null,
    setEventData: data => set({ eventData: data }),
    clearEventData: () => set({ eventData: null }),
  }))
);
