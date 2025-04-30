import { AddMemberBottomSheet, KakaoMapView, MapBottomSheet, MapHeader } from "@/features/mapView/ui";

const MapViewPage = () => {
  const memberCount = 2;

  return (
    <div>
      <div className="px-5">
        <MapHeader />
      </div>
      <KakaoMapView />
      {memberCount >= 2 ? <MapBottomSheet /> : <AddMemberBottomSheet />}
    </div>
  );
};

export default MapViewPage;
