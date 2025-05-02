import { AddMemberBottomSheet, KakaoMapView, MapBottomSheet, MapHeader } from "@/features/mapView/ui";

const MapViewPage = () => {
  const memberCount = 2; // 임시 인원 설정

  return (
    <div>
      <div className="px-5 min-h-[100dvh]">
        <MapHeader />
      </div>
      <KakaoMapView />
      {memberCount >= 2 ? <MapBottomSheet /> : <AddMemberBottomSheet />}
    </div>
  );
};

export default MapViewPage;
