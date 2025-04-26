import { createBrowserRouter } from "react-router-dom";
import MapViewPage from "../../pages/MapViewPage";
import MainPage from "../../pages/MainPage";
import StartPointPage from "../../pages/StartPointPage";
import FindPage from "../../pages/FindPage";
import PlacePage from "../../pages/PlacePage";
import DetailPage from "../../pages/DetailPage";
import HistoryPage from "@/pages/HistoryPage";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/mapView", element: <MapViewPage /> },
  { path: "/startPoint", element: <StartPointPage /> },
  { path: "/find", element: <FindPage /> },
  { path: "/place", element: <PlacePage /> },
  { path: "/detail", element: <DetailPage /> },
  { path: "/history", element: <HistoryPage /> },
]);
