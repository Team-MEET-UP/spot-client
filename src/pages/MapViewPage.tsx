import {
  AddMemberBottomSheet,
  DetailKakaoMapView,
  KakaoMapView,
  MapDetailBottomSheet,
  MapHeader,
  SnapMapBottomSheet,
} from "@/features/mapView/ui";
import { useState } from "react";

const MapViewPage = () => {
  const [isDetail, setIsDetail] = useState(true);
  const [openDetailBottomSheet, setOpenDetailBottomSheet] = useState(true);
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
