interface openKakaoMapProps {
  endPoint: string;
  endLat: number;
  endLog: number;
}

export const openKakaoMap = ({ endPoint, endLat, endLog }: openKakaoMapProps) => {
  const kakaoMapUrl = `https://map.kakao.com/link/to/${endPoint},${endLat},${endLog}`;
  window.open(kakaoMapUrl, "_blank");
};
