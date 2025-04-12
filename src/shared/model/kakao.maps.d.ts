
export {}; // 모듈로 인식되도록 설정

declare global {
  interface Window {
    kakao: typeof kakao;
    polylines: kakao.maps.Polyline[];
  }

  namespace kakao {
    namespace maps {
      class LatLng {
        constructor(lat: number, lng: number);
      }

      class LatLngBounds {
        extend(latlng: LatLng): void;
      }

      class Map {
        constructor(container: HTMLElement, options: { center: LatLng; level: number });
        setBounds(bounds: LatLngBounds): void;
      }

      class Marker {
        constructor(options: {
          position: LatLng;
          map: Map;
          title?: string;
        });
        setMap(map: Map | null): void;
      }

      class Polyline {
        constructor(options: {
          path: LatLng[];
          strokeWeight: number;
          strokeColor: string;
          strokeOpacity: number;
          map: Map;
        });
        setMap(map: Map | null): void;
      }

      namespace event {
        function addListener(
          target: any,
          type: string,
          handler: () => void
        ): void;

        function removeListener(
          target: any,
          type: string,
          handler: () => void
        ): void;
      }

      function load(callback: () => void): void;
    }
  }
}
