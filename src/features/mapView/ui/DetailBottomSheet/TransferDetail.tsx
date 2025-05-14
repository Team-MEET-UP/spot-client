import { useEventStore } from "@/shared/stores";
import { TransferType } from "../../model";
import { openKakaoMap, openNaverMap, openTMAP } from "../../utils";
import { useDeviceDetector } from "../../utils/useDeviceDetector";

interface TransferDetailProps {
  type: TransferType;
  averageDuration: number;
  startPoint: string;
  endPoint: string;
}

export const TransferDetail = ({ type, averageDuration, startPoint, endPoint }: TransferDetailProps) => {
  const eventData = useEventStore(state => state.eventData);
  const detailEventData = useEventStore(state => state.detailEventData);

  // 디바이스 정보
  const deviceType = useDeviceDetector();

  if (!eventData || !detailEventData) return;

  const TransferMap = {
    subway: [
      {
        src: "/icon/kakaoMap.svg",
        alt: "kakaoMap",
        onClick: () =>
          openKakaoMap({
            endPoint: eventData.meetingPoint.endStationName,
            endLat: eventData.meetingPoint.endLatitude,
            endLog: eventData.meetingPoint.endLongitude,
          }),
      },
      {
        src: "/icon/naverMap.svg",
        alt: "naverMap",
        onClick: () =>
          openNaverMap({
            startPoint: detailEventData.startName,
            startLat: detailEventData.startLatitude,
            startLog: detailEventData.startLongitude,
            endPoint: eventData.meetingPoint.endStationName,
            endLat: eventData.meetingPoint.endLatitude,
            endLog: eventData.meetingPoint.endLongitude,
          }),
      },
    ],
    car: [
      {
        src: "/icon/TMap.svg",
        alt: "tMap",
        onClick: () =>
          openTMAP({
            endPoint: eventData.meetingPoint.endStationName,
            endLat: eventData.meetingPoint.endLatitude,
            endLog: eventData.meetingPoint.endLongitude,
          }),
      },
    ],
  };

  const filteredIcons = TransferMap[type].filter(() =>
    type === "car" ? !(deviceType === "Windows PC" || deviceType === "Mac PC") : true
  );

  return (
    <div className="flex flex-col px-5 py-4 gap-1">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <img src={type === "subway" ? "/icon/subway.svg" : "/icon/car.svg"} alt="transfer" />
          <span className="text-xl font-bold text-gray-90">{averageDuration}분</span>
        </div>
        <div className="flex gap-2">
          {filteredIcons.map(({ src, alt, onClick }) => (
            <button key={alt} onClick={onClick}>
              <img src={src} alt={alt} />
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-1 items-center text-md font-semibold text-gray-60">
        {startPoint}
        <img src="/icon/rightArrowLine.svg" alt="arrow" />
        {endPoint}
      </div>
    </div>
  );
};
