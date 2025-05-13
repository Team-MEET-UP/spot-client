import { useEventRoutes } from "@/features/mapView/hooks";
import {
  AddMemberBottomSheet,
  DetailKakaoMapView,
  KakaoMapView,
  MapDetailBottomSheet,
  MapHeader,
  SnapMapBottomSheet,
  TooCloseSheet,
} from "@/features/mapView/ui";
import BackButton from "@/features/mapView/ui/BackButton";
import { useEventStore } from "@/shared/stores";
import { AxiosError } from "axios";
import { useEffect } from "react";

const MapViewPage = () => {
  const openDetailBottomSheet = true; // 임시 작업
  const memberCount = 2; // 임시 인원 설정

  const { data, isLoading, isError, error } = useEventRoutes();
  const setEventData = useEventStore(state => state.setEventData);
  const isDetail = useEventStore(state => state.isDetail);

  // const [midpointError, setMidpointError] = useState(false); // 중간지점 산출 실패 상태

  const errorCode = (error as AxiosError<{ error: { code: string } }>)?.response?.data?.error?.code;
  const isInsufficientStartPoints = errorCode === "INSUFFICIENT_START_POINTS";

  useEffect(() => {
    if (data) {
      setEventData(data);
    }
  }, [data, setEventData]);

  return (
    <div>
      {!isDetail && <MapHeader />}
      {isLoading ? (
        <div>실시간 교통상황을 가져오고 있습니다...</div>
      ) : isError ? (
        isInsufficientStartPoints ? (
          <AddMemberBottomSheet />
        ) : (
          <TooCloseSheet />
        )
      ) : isDetail ? (
        <div className="relative">
          <BackButton />
          <DetailKakaoMapView />
          {openDetailBottomSheet && <MapDetailBottomSheet />}
        </div>
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
