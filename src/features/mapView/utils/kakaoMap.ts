import { OpenMapProps } from "../model";

export const openKakaoMap = ({ endPoint, endLat, endLog }: OpenMapProps) => {
  const kakaoMapUrl = `https://map.kakao.com/link/to/${endPoint},${endLat},${endLog}`;
  window.open(kakaoMapUrl, "_blank");
};
