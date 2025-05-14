import { useEventRoutes } from "@/features/mapView/hooks";
import {
  AddMemberBottomSheet,
  DetailKakaoMapView,
  KakaoMapView,
  MapDetailBottomSheet,
  SnapMapBottomSheet,
  TooCloseSheet,
} from "@/features/mapView/ui";
import BackButton from "@/features/mapView/ui/BackButton";
import { useEventStore } from "@/shared/stores";
import { MapHeader } from "@/widgets/Header";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const MapViewPage = () => {
  const [searchParams] = useSearchParams();
  const eventIdParam = searchParams.get("eventId");

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

  useEffect(() => {
    if (eventIdParam) {
      localStorage.setItem("shared_link_access", eventIdParam);
    }
  }, [eventIdParam]);

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
          <MapDetailBottomSheet />
        </div>
      ) : (
        <>
          <KakaoMapView />
          <SnapMapBottomSheet />
        </>
      )}
    </div>
  );
};

export default MapViewPage;
