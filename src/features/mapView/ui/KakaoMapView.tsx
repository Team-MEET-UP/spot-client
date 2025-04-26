import { useEffect, useRef, useState } from "react";
import MapMarker from "./MapMarker";
import { mockLocationData } from "@/shared/model";

function KakaoMapView() {
  const mapRef = useRef<HTMLDivElement>(null);

  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [center, setCenter] = useState<kakao.maps.LatLng | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      window.kakao.maps.load(() => {
        if (mapRef.current) {
          const centerLatLng = new window.kakao.maps.LatLng(
            mockLocationData.midpoint.lat,
            mockLocationData.midpoint.lng
          );
          setCenter(centerLatLng);

          const options = {
            center: centerLatLng,
            level: 3,
          };

          const kakaoMap = new window.kakao.maps.Map(mapRef.current, options);
          setMap(kakaoMap);

          const bounds = new window.kakao.maps.LatLngBounds();

          mockLocationData.locations.forEach(location => {
            bounds.extend(new window.kakao.maps.LatLng(location.lat, location.lng));
          });

          kakaoMap.setBounds(bounds);

          window.kakao.maps.event.addListener(kakaoMap, "tilesloaded", () => {
            console.log("맵 로드 완료");
          });
        }
      });
    };

    if (document.getElementById("kakao-map-script")) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.id = "kakao-map-script";
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
      }&autoload=false&libraries=services,clusterer`;
      script.async = true;
      script.onload = () => {
        initializeMap();
      };
      document.head.appendChild(script);
    }
  }, []);

  const drawPolylines = () => {
    if (!map || !center) return;

    if (window.polylines) {
      window.polylines.forEach((polyline: kakao.maps.Polyline) => {
        polyline.setMap(null);
      });
    }

    window.polylines = [];

    mockLocationData.locations.forEach(location => {
      const markerLatLng = new window.kakao.maps.LatLng(location.lat, location.lng);

      const polyline = new window.kakao.maps.Polyline({
        path: [markerLatLng, center],
        strokeWeight: 3,
        strokeColor: "#FF0000",
        strokeOpacity: 0.7,
        map: map,
      });

      window.polylines.push(polyline);
    });
  };

  useEffect(() => {
    drawPolylines();
  }, [map, center]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "8px",
      }}>
      {map &&
        mockLocationData.locations.map(location => (
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

export { KakaoMapView };
