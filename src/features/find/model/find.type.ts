export interface RawLocation {
  id: string;
  place_name: string;
  address_name: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface StartPointResponse {
  result: string;
  data: {
    documents: RawLocation[];
    meta: {
      total_count: number;
      pageable_count: number;
      is_end: boolean;
      same_name: {
        region: string[];
        keyword: string;
        selected_region: string;
      };
    };
  };
  error: {
    code: string;
    message: string;
  };
}

export interface StartPointInfo {
  name: string;
  startPoint: string;
  address: string;
  roadAddress: string;
  longitude: number;
  latitude: number;
}

export interface FormattedData {
  username: string;
  startPoint: string;
  address: string;
  roadAddress: string;
  longitude: number;
  latitude: number;
}
