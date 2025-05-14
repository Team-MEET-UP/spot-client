import { OpenMapProps } from "../model";

interface OpenKakaoMapProps extends OpenMapProps {
  startLat: number;
  startLng: number;
}

export const openKakaoMap = ({ startLat, startLng, endPoint, endLat, endLng }: OpenKakaoMapProps) => {
  const kakaoAppUrl = `kakaomap://route?sp=${startLat},${startLng}&ep=${endLat},${endLng}&by=CAR`;
  const kakaoMapUrl = `https://map.kakao.com/link/to/${endPoint},${endLat},${endLng}`;
  window.open(kakaoAppUrl, "_blank");

  // APP이 설치되어 있지 않으면 웹으로 리다이렉트
  setTimeout(() => {
    if (!document.hidden) {
      window.open(kakaoMapUrl, "_blank");
    }
  }, 1000);
};
