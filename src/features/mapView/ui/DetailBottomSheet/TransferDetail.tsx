import { useEventStore } from "@/shared/stores";
import { TransferType } from "../../model";
import { openKakaoMap, openNaverMap, openTMAP } from "../../utils";
import { useDeviceDetector } from "../../utils/useDeviceDetector";
import KakaoMap from "@/assets/icon/kakaoMap.svg";
import NaverMap from "@/assets/icon/naverMap.svg";
import TMap from "@/assets/icon/TMap.svg";
import ArrowLine from "@/assets/icon/rightArrowLine.svg";
import Subway from "@/assets/icon/subway.svg";
import Car from "@/assets/icon/car.svg";

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
        src: KakaoMap,
        alt: "kakaoMap",
        onClick: () =>
          openKakaoMap({
            startLat: detailEventData.startLatitude,
            startLng: detailEventData.startLongitude,
            endPoint: eventData.meetingPoint.endStationName,
            endLat: eventData.meetingPoint.endLatitude,
            endLng: eventData.meetingPoint.endLongitude,
          }),
      },
      {
        src: NaverMap,
        alt: "naverMap",
        onClick: () =>
          openNaverMap({
            startPoint: detailEventData.startName,
            startLat: detailEventData.startLatitude,
            startLng: detailEventData.startLongitude,
            endPoint: eventData.meetingPoint.endStationName,
            endLat: eventData.meetingPoint.endLatitude,
            endLng: eventData.meetingPoint.endLongitude,
          }),
      },
    ],
    car: [
      {
        src: TMap,
        alt: "tMap",
        onClick: () =>
          openTMAP({
            endPoint: eventData.meetingPoint.endStationName,
            endLat: eventData.meetingPoint.endLatitude,
            endLng: eventData.meetingPoint.endLongitude,
          }),
      },
    ],
  };

  const filteredIcons = TransferMap[type].filter(() => (type === "car" ? deviceType === "iPhone" : true));

  return (
    <div className="flex flex-col px-5 py-4 gap-1">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <img src={type === "subway" ? Subway : Car} alt="transfer" className="w-6 h-6" />
          <span className="text-xl font-bold text-gray-90">{averageDuration}분</span>
        </div>
        <div className="flex gap-2">
          {filteredIcons.map(({ src, alt, onClick }) => (
            <button key={alt} onClick={onClick}>
              <img src={src} alt={alt} className="w-6 h-6" />
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-1 items-center text-md font-semibold text-gray-60">
        {startPoint}
        <img src={ArrowLine} alt="arrow" className="w-4 h-4" />
        {endPoint}
      </div>
    </div>
  );
};
