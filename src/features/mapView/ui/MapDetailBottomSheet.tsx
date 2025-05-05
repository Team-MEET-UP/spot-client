import { BottomSheet } from "@/shared/ui";
import { Overlay } from "@/shared/ui/BottomSheet/Overlay";
import { useState } from "react";
import { CarDetail } from "./TransferDetail";
import { FixedButton, Path, TransferDetail } from "./DetailBottomSheet";
import { TransferInfo, TransferType } from "../model";

const transferInfo: TransferInfo[] = [
  {
    type: "walk",
    startBoard: "2번 출구",
    endBoard: "교대역2번출구 정류장",
    distance: 535,
    duration: 4,
  },
  {
    type: "bus",
    startBoard: "정류장",
    endBoard: "서울대입구역",
    stationsCnt: 6,
    stations: [],
    bus: ["202", "302"],
    duration: 15,
  },
  {
    type: "subway",
    line: "수도권 2호선",
    startBoard: "서울대입구역",
    endBoard: "강남역",
    stationsCnt: 8,
    stations: [],
    duration: 14,
  },
  {
    type: "walk",
    endBoard: "회사",
    distance: 535,
    duration: 3,
  },
] as const;

export const MapDetailBottomSheet = () => {
  const [type, setType] = useState<TransferType>("subway");

  return (
    <>
      <Overlay isBlur={false} />
      <BottomSheet minHeightVh={25} maxHeightVh={50}>
        <BottomSheet.Header />
        <BottomSheet.Content>
          <TransferDetail type={type} averageDuration={37} startPoint="선릉역" endPoint="신촌역" />
          {type === "subway" ? (
            <Path startPoint="신촌역" endPoint="옥수역" transferInfo={transferInfo} />
          ) : (
            <CarDetail
              driveDistance={37}
              toll="8,000"
              taxiToll="27,00"
              parking={{ name: "잠원동방음언덕형 공영주차장", distance: 40 }}
            />
          )}
          <FixedButton type={type} setType={setType} />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};
