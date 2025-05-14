interface OpenNaverMapProps {
  startPoint: string;
  startLat: number;
  startLog: number;
  endPoint: string;
  endLat: number;
  endLog: number;
}

export const openNaverMap = ({ startPoint, startLat, startLog, endPoint, endLat, endLog }: OpenNaverMapProps) => {
  const naverMapUrl = `https://map.naver.com/index.nhn?slng=${startLog}&slat=${startLat}&stext=${startPoint}&elng=${endLog}&elat=${endLat}&etext=${endPoint}&menu=route`;
  window.open(naverMapUrl, "_blank");
};
