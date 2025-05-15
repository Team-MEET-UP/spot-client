import { createBrowserRouter } from "react-router-dom";
import DetailPage from "@/pages/DetailPage";
import FindPage from "@/pages/FindPage";
import HistoryPage from "@/pages/HistoryPage";
import MainPage from "@/pages/MainPage";
import MapViewPage from "@/pages/MapViewPage";
import MyPage from "@/pages/MyPage";
import PlacePage from "@/pages/PlacePage";
import ReviewPage from "@/pages/ReviewPage";
import StartPointPage from "@/pages/StartPointPage";
import VisitedPage from "@/pages/VisitedPage";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/detail", element: <DetailPage /> },
  { path: "/find", element: <FindPage /> },
  { path: "/history", element: <HistoryPage /> },
  { path: "/mapView", element: <MapViewPage /> },
  { path: "/my", element: <MyPage /> },
  { path: "/place", element: <PlacePage /> },
  { path: "/review/:id", element: <ReviewPage /> },
  { path: "/startPoint", element: <StartPointPage /> },
  { path: "/visited/:id", element: <VisitedPage /> },
]);
