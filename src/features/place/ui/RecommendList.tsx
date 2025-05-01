import { mockPlaceItems } from "@/shared/model/mocks/mockPlaceList";
import PlaceCard from "@/shared/ui/PlaceCard";
import { FilterChips } from ".";

export const RecommendList = () => {
  return (
    <div className="h-full flex flex-col bg-gray-5">
      <FilterChips />
      <div className="flex-1 overflow-y-auto px-5">
        <div className="flex flex-col gap-3">
          {mockPlaceItems.map(item => (
            <PlaceCard
              key={item.id}
              placeName={item.placeName}
              distance={item.distance}
              openingHours={item.openingHours}
              image={item.image}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
