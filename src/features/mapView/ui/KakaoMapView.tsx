import { useEffect, useRef, useState } from "react";

function KakaoMapView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      window.kakao.maps.load(() => {
        if (mapRef.current) {
          const center = new window.kakao.maps.LatLng(37.5665, 126.9780);
          const options = {
            center,
            level: 3,
          };

          const kakaoMap = new window.kakao.maps.Map(mapRef.current, options);
          setMap(kakaoMap);

          window.kakao.maps.event.addListener(kakaoMap, 'tilesloaded', () => {
            console.log("맵 로드 완료");
          });
        }
      });
    };

    if (document.getElementById("kakao-map-script")) {
      initializeMap(); // 이미 스크립트 로드된 경우
    } else {
      const script = document.createElement("script");
      script.id = "kakao-map-script";
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
      }&autoload=false&libraries=services,clusterer`;
      script.async = true;

      script.onload = () => {
        initializeMap(); // 스크립트가 로드된 후 초기화
      };

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "500px",
        height: "500px",
        borderRadius: "8px",
      }}
    />
  );
}

export default KakaoMapView;
