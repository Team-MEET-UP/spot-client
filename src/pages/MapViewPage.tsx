import { useEventRoutes } from "@/features/mapView/hooks/useEventInfo";
import {
  AddMemberBottomSheet,
  DetailKakaoMapView,
  KakaoMapView,
  MapDetailBottomSheet,
  MapHeader,
  SnapMapBottomSheet,
  TooCloseSheet,
} from "@/features/mapView/ui";
import { useEventStore } from "@/shared/stores";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const MapViewPage = () => {
  const isDetail = false; // 임시 작업
  const openDetailBottomSheet = true; // 임시 작업
  const memberCount = 2; // 임시 인원 설정

  const { data, isLoading, isError, error } = useEventRoutes();
  const setEventData = useEventStore(state => state.setEventData);

  const [midpointError, setMidpointError] = useState(false); // 중간지점 산출 실패 상태
  void setMidpointError; // 빌드에러 방지를 위한 임시 처리

  const errorCode = (error as AxiosError<{ error: { code: string } }>)?.response?.data?.error?.code;
  const isInsufficientStartPoints = errorCode === "INSUFFICIENT_START_POINTS";

  useEffect(() => {
    if (data) {
      setEventData(data);
    }
  }, [data, setEventData]);

  return (
    <div>
      <MapHeader />
      <KakaoMapView />
      {isLoading ? (
        <div>실시간 교통상황을 가져오고 있습니다...</div>
      ) : isError ? (
        isInsufficientStartPoints ? (
          <AddMemberBottomSheet />
        ) : (
          <TooCloseSheet />
        )
      ) : isDetail ? (
        <>
          <DetailKakaoMapView />
          {openDetailBottomSheet && <MapDetailBottomSheet />}
        </>
      ) : (
        <>{memberCount >= 2 ? <SnapMapBottomSheet /> : <AddMemberBottomSheet />}</>
      )}
    </div>
  );
};

export default MapViewPage;
