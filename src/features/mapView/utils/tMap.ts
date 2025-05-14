interface openTMapProps {
  endPoint: string;
  endLat: number;
  endLog: number;
}

export const openTMAP = ({ endPoint, endLat, endLog }: openTMapProps) => {
  const tMapUrl = `tmap://route?goalname=${endPoint}&goalx=${endLog}&goaly=${endLat}`;
  window.open(tMapUrl, "_black");
};
