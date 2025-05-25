import { useEventRoutes } from "@/features/mapView/hooks";
import { TransferType } from "@/features/mapView/model";
import {
  AddMemberBottomSheet,
  DetailKakaoMapView,
  KakaoMapView,
  MapDetailBottomSheet,
  SnapMapBottomSheet,
  TooCloseSheet,
} from "@/features/mapView/ui";
import BackButton from "@/features/mapView/ui/common/BackButton";
import { DefaultMap } from "@/features/mapView/ui/map/DefaultMap";
import { useEventStore } from "@/shared/stores";
import LoadingSpinner from "@/shared/ui/LoadingSpinner";
import { MapHeader } from "@/widgets/headers";
import { AxiosError } from "axios";
import { setCookie } from "@/shared/utils";
import { useEffect, useState } from "react";

const MapViewPage = () => {
  const { data, isLoading, isError, error } = useEventRoutes();
  const setEventData = useEventStore(state => state.setEventData);
  const isDetail = useEventStore(state => state.isDetail);

  const errorCode = (error as AxiosError<{ error: { code: string } }>)?.response?.data?.error?.code;
  const isInsufficientStartPoints = errorCode === "INSUFFICIENT_START_POINTS";

  const [type, setType] = useState<TransferType>("subway");

  useEffect(() => {
    if (data) {
      setEventData(data);
      // 현재 사용자의 routeResponse 찾기
      const myRoute = data.routeResponse.find(route => route.isMe);
      if (myRoute) {
        // startPointId를 쿠키에 저장
        setCookie("startPointId", myRoute.id, { path: "/", maxAge: 86400 });
      }
    }
  }, [data, setEventData]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!isDetail && <MapHeader />}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-full gap-3">
          <LoadingSpinner />
          <p>실시간 교통상황을 가져오고 있습니다...</p>
        </div>
      ) : isError ? (
        <>
          {<DefaultMap />}
          {isInsufficientStartPoints ? <AddMemberBottomSheet /> : <TooCloseSheet />}
        </>
      ) : isDetail ? (
        <div className="relative">
          <BackButton />
          <DetailKakaoMapView type={type} />
          <MapDetailBottomSheet type={type} setType={setType} />
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
