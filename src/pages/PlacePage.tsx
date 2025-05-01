import { ConfirmedCard, RecommendCard } from "@/features/place/ui";
import { mockPlaceItems } from "@/shared/model/mocks/mockPlaceList";
import PlainHeader from "@/shared/ui/PlainHeader";

const PlacePage = () => {
  const mockData = mockPlaceItems[0];
  const isConfirmed = true; // 여기서 장소의 확정 상태를 받아온다면

  return (
    <div className="flex flex-col h-screen px-5">
      <PlainHeader title="장소 추천" url="/mapview" />
      <div className="mt-3">
        {!isConfirmed && <RecommendCard place="동대문역사문화공원역" />}
        {isConfirmed && (
          <ConfirmedCard
            placeName="동대문 역사문화공원역"
            distance={mockData.distance}
            image={mockData.image}
            openingHours={mockData.openingHours}
            review={mockData.review}
          />
        )}
      </div>
    </div>
  );
};

export default PlacePage;
