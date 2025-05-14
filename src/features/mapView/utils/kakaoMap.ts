interface openKakaoMapProps {
  startPoint: string;
  startLat: number;
  startLog: number;
  endPoint: string;
  endLat: number;
  endLog: number;
}

export const openKakaoMap = ({ startPoint, startLat, startLog, endPoint, endLat, endLog }: openKakaoMapProps) => {
  const kakaoMapUrl = `https://map.kakao.com/link/from/${startPoint},${startLat},${startLog}/to/${endPoint},${endLat},${endLog}`;
  window.open(kakaoMapUrl, "_blank");
};
