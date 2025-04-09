import { useEffect, useRef, useState } from "react";
import MapMarker from "./MapMarker";
import { mockLocationData } from "../../../shared/model";


function KakaoMapView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      window.kakao.maps.load(() => {
        if (mapRef.current) {
          // mockLocationData의 첫 번째 위치를 초기 중심점으로 설정
          const firstLocation = mockLocationData.locations[0];
          const center = new window.kakao.maps.LatLng(firstLocation.lat, firstLocation.lng);
          const options = {
            center,
            level: 3,
          };

          const kakaoMap = new window.kakao.maps.Map(mapRef.current, options);
          setMap(kakaoMap);

          // 모든 마커의 위치를 포함하는 LatLngBounds 객체 생성
          const bounds = new window.kakao.maps.LatLngBounds();
          
          // mockLocationData의 모든 위치를 bounds에 추가
          mockLocationData.locations.forEach(location => {
            bounds.extend(new window.kakao.maps.LatLng(location.lat, location.lng));
          });

          // 지도에 bounds 적용
          kakaoMap.setBounds(bounds);

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
        width: "100%",
        height: "500px",
        borderRadius: "8px",
      }}
    >
      {map && mockLocationData.locations.map((location) => (
        <MapMarker 
          key={location.id} 
          map={map} 
          position={{ lat: location.lat, lng: location.lng }}
          title={location.name}
        />
      ))}
    </div>
  );
}

export default KakaoMapView;
