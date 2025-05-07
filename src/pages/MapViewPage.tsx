import {
  AddMemberBottomSheet,
  DetailKakaoMapView,
  KakaoMapView,
  MapDetailBottomSheet,
  MapHeader,
  SnapMapBottomSheet,
} from "@/features/mapView/ui";

const MapViewPage = () => {
  const isDetail = true; // 임시 작업
  const openDetailBottomSheet = true; // 임시 작업
  const memberCount = 2; // 임시 인원 설정

  return (
    <div>
      <div className="px-5">
        <MapHeader />
      </div>
      {isDetail ? (
        <>
          <DetailKakaoMapView />
          {openDetailBottomSheet && <MapDetailBottomSheet />}
        </>
      ) : (
        <>
          <KakaoMapView />
          {memberCount >= 2 ? <SnapMapBottomSheet /> : <AddMemberBottomSheet />}
        </>
      )}
    </div>
  );
};

export default MapViewPage;
