import { KakaoMapView, MapHeader } from "@/features/mapView/ui";

const MapViewPage = () => {
  return (
    <div>
      <div className="px-5">
        <MapHeader />
      </div>

      <KakaoMapView />
    </div>
  );
};

export default MapViewPage;
