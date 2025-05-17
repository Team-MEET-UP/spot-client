import MapImage from "@/assets/image/mapImage.webp";

export const MapBackground = () => {
  return (
    <img src={MapImage} alt="지도 배경 이미지" className="absolute top-0 left-0 w-full h-full object-cover z-10" />
  );
};
