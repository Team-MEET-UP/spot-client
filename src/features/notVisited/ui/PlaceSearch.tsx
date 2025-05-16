import { InputField, LocationCard } from "@/shared/ui";
import { VisitedPlaceProps } from "../model";
import { CloseHeader } from "@/widgets/headers";
import NoResult from "@/assets/icon/noresult.svg";
import { useState } from "react";
import { highlightMatchingText } from "@/shared/utils";
import { CompleteButton } from "./CompleteButton";

interface PlaceSearchProps {
  visitedPlace: VisitedPlaceProps;
  setCurrentStep: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setVisitedPlace: (place: VisitedPlaceProps) => void;
}

export const PlaceSearch = ({ visitedPlace, setCurrentStep, onChange, setVisitedPlace }: PlaceSearchProps) => {
  const isError = false;
  const searchResults: VisitedPlaceProps[] = [
    {
      name: "서울특별시 강남구 테헤란로 14길 6 남도빌딩",
      roadAddress: "서울특별시 강남구 테헤란로 14길 6 남도빌딩",
      latitude: 37.5665,
      longitude: 126.978,
      regionName: "강남구",
    },
  ];
  const [value, setValue] = useState("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e);
  };
  const handleSelectLocation = (location: VisitedPlaceProps) => {
    setValue(location.name);

    setVisitedPlace({
      name: location.name,
      roadAddress: location.roadAddress,
      latitude: location.latitude,
      longitude: location.longitude,
      regionName: location.regionName,
    });
  };

  return (
    <div className="relative flex flex-col h-full">
      <div className="flex-1 px-4">
        <CloseHeader onClick={setCurrentStep} />
        <div className="flex flex-col gap-4 px-5">
          <InputField
            value={visitedPlace.name}
            placeholder="출발지를 입력해주세요"
            onChange={onChangeValue}
            type="startPoint"
          />

          <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-216px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {isError ? (
              <p className="text-red-500 text-sm">검색 중 오류가 발생했어요.</p>
            ) : searchResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10">
                <img src={NoResult} alt="검색 결과 없음" className="w-32 h-32" />
                <p className="text-center text-gray-40 text-sm">
                  일치하는 주소가 없어요
                  <br />
                  서울 내 지역인지 다시 확인해보세요
                </p>
              </div>
            ) : (
              searchResults.map((location, index) => (
                <LocationCard
                  key={index}
                  name={highlightMatchingText(location.name, value)}
                  address={location.roadAddress}
                  onClick={() => handleSelectLocation(location)}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 w-full">
        <CompleteButton label="완료" />
      </div>
    </div>
  );
};
