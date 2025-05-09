interface LocationInfo {
  address: string;
  roadAddress: string;
  placeName: string;
}

export const getLocationInfo = (
  latitude: number,
  longitude: number
): Promise<LocationInfo> => {
  return new Promise((resolve, reject) => {
    if (!window.kakao || !window.kakao.maps) {
      reject(new Error("Kakao Maps SDK not loaded"));
      return;
    }

    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();

      // 좌표 로그 출력
      console.log("Latitude:", latitude, "Longitude:", longitude);

      geocoder.coord2Address(longitude, latitude, (result: any, status: string) => {
        console.log("Geocode result:", result);
        console.log("Geocode status:", status);

        if (status === window.kakao.maps.services.Status.OK) {
          // result가 직접 documents 배열을 가지고 있는 경우
          const documents = Array.isArray(result) ? result : result.documents;
          
          if (documents && documents.length > 0) {
            const document = documents[0];

            // 주소 정보 추출
            const address = document.address?.address_name || "";
            const roadAddress = document.road_address?.address_name || address;

            // 지명 추출 (우선순위: road_address > region_3depth_name > region_2depth_name > region_1depth_name)
            let placeName = "";
            if (document.road_address?.building_name) {
              placeName = document.road_address.building_name;
            } else if (document.address?.region_3depth_name) {
              placeName = document.address.region_3depth_name;
            } else if (document.address?.region_2depth_name) {
              placeName = document.address.region_2depth_name;
            } else {
              placeName = document.address?.region_1depth_name || "";
            }

            resolve({
              address,
              roadAddress,
              placeName,
            });
          } else {
            reject(new Error("주소를 찾을 수 없습니다"));
          }
        } else {
          reject(new Error(`Failed to get address from coordinates. Status: ${status}`));
        }
      });
    });
  });
};