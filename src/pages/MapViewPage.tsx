import { AddMemberBottomSheet, KakaoMapView, MapHeader, SnapMapBottomSheet} from "@/features/mapView/ui";

const MapViewPage = () => {
  const memberCount = 2; // 임시 인원 설정

  return (
    <div>
      <div className="px-5">
        <MapHeader />
      </div>
      <KakaoMapView />
      {memberCount >= 2 ? <SnapMapBottomSheet /> : <AddMemberBottomSheet />}
    </div>
  );
};

export default MapViewPage;
