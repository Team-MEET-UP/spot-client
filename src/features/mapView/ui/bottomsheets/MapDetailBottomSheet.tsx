import { SnapBottomSheet } from "@/shared/ui";
import { useEventStore } from "@/shared/stores";

import { CarDetail, FixedButton, Path, TransferDetail } from "./detailContents";

export const MapDetailBottomSheet = () => {
  const detailEventData = useEventStore(state => state.detailEventData);
  const eventData = useEventStore(state => state.eventData);

  if (!detailEventData || !eventData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SnapBottomSheet minHeightVh={30}>
        <SnapBottomSheet.Header />
        <TransferDetail
          type={detailEventData.isTransit}
          averageDuration={detailEventData.isTransit ? detailEventData.transitTime : detailEventData.driveTime}
          startPoint={detailEventData.startName}
          endPoint={eventData.meetingPoint.endStationName}
          isMe={detailEventData.isMe}
        />
        <SnapBottomSheet.Content>
          {detailEventData.isTransit ? (
            <Path
              startPoint={detailEventData.startName}
              endPoint={eventData.meetingPoint.endStationName}
              transferInfo={detailEventData.transitRoute}
            />
          ) : (
            <CarDetail
              driveDistance={detailEventData.drivingInfo.distance}
              toll={detailEventData.drivingInfo.toll}
              taxiToll={detailEventData.drivingInfo.taxi}
              parking={eventData.parkingLot}
            />
          )}
          <FixedButton />
        </SnapBottomSheet.Content>
      </SnapBottomSheet>
    </>
  );
};
