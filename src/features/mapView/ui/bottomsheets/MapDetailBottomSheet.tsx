import { SnapBottomSheet } from "@/shared/ui";
import { useEventStore } from "@/shared/stores";
import { TransferType } from "../../model";
import { CarDetail, FixedButton, Path, TransChip, TransferDetail } from "./detailContents";

interface MapDetailBottomSheetProps {
  type: TransferType;
  setType: React.Dispatch<React.SetStateAction<"subway" | "car">>;
}

export const MapDetailBottomSheet = ({ type, setType }: MapDetailBottomSheetProps) => {
  const detailEventData = useEventStore(state => state.detailEventData);
  const eventData = useEventStore(state => state.eventData);

  if (!detailEventData || !eventData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SnapBottomSheet minHeightVh={30}>
        <SnapBottomSheet.Header />
        <TransChip type={type} setType={setType} isMe={detailEventData.isMe} />
        <TransferDetail
          averageDuration={type === "car" ? detailEventData.driveTime : detailEventData.transitTime}
          startPoint={detailEventData.startName}
          endPoint={eventData.meetingPoint.endStationName}
        />
        <SnapBottomSheet.Content>
          {type === "subway" ? (
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
