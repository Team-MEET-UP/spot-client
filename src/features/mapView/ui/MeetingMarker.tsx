import { useEffect, useRef } from "react";

interface MeetingMarkerProps {
  map: kakao.maps.Map;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

export function MeetingMarker({ map, position, title }: MeetingMarkerProps) {
  const markerRef = useRef<kakao.maps.Marker | null>(null);

  useEffect(() => {
    if (!map) return;

    const markerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);
    
    const markerImage = new window.kakao.maps.MarkerImage(
      "/icon/meeting-spot.svg",
      new window.kakao.maps.Size(56, 56),
      {
        offset: new window.kakao.maps.Point(28, 28)
      }
    );

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
      map: map,
      title: title,
      image: markerImage,
    });

    markerRef.current = marker;

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
    };
  }, [map, position, title]);

  return null;
}
