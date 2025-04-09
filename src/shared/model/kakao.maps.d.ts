declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        Map: new (container: HTMLElement, options: {
          center: any;
          level: number;
        }) => any;
        LatLng: new (lat: number, lng: number) => any;
        Marker: new (options: {
          position: any;
          map: any;
          title?: string;
        }) => any;
        event: {
          addListener: (target: any, type: string, handler: () => void) => void;
        };
      };
    };
  }
}

export {}; 