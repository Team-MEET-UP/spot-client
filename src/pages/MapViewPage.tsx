import { KakaoMapView, MapBottomSheet, MapHeader } from "@/features/mapView/ui";

const MapViewPage = () => {

  return (
    <div>
      <div className="px-5">
        <MapHeader />
      </div>
      <KakaoMapView />
      <MapBottomSheet />
    </div>
  );
};

export default MapViewPage;
