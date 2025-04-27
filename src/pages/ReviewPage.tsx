import PlaceCard from "@/shared/ui/PlaceCard";
import SmallButton from "@/features/review/ui/SmallButton";
import Title from "@/features/review/ui/Title";
import CloseHeader from "@/shared/ui/CloseHeader";
import { mockPlaceItems } from "@/shared/model/mocks/mockPlaceList";

const ReviewPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <CloseHeader url="/history" />
      <div className="flex flex-col justify-between h-full p-5 pt-4">
        <div className="flex flex-col gap-8">
          <Title title="박승광해물손칼국수 진점점dddddd 박승광해물" />
          <div className="flex flex-col gap-3 items-center">
            <PlaceCard {...mockPlaceItems[0]} /> {/* 임시 데이터 추가 */}
            <p className="text-sm font-semibold text-gray-30">방문하신 장소를 확인해 주세요.</p>
          </div>
        </div>
        <div className="w-full flex gap-2">
          <SmallButton isVisit={false}>다른 곳을 방문했어요</SmallButton>
          <SmallButton isVisit={true}>네, 방문했어요</SmallButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
