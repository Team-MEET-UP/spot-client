import PlaceCard from "@/shared/ui/PlaceCard";
import { useNavigate } from "react-router-dom";
import { PlaceResponse } from "../model";
// import { FilterChips } from ".";

interface RecommendListProps {
  places: PlaceResponse[];
}

export const RecommendList = ({ places }: RecommendListProps) => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col bg-gray-5">
      {/* <FilterChips /> */}
      <div className="flex-1 overflow-y-auto px-5 p-3">
        <div className="flex flex-col gap-3">
          {places.map(place => (
            <PlaceCard
              key={place.id}
              name={place.name}
              distance={place.distance}
              openTime={place.openTime}
              closeTime={place.closeTime}
              image={place.image}
              averageRating={place.averageRating}
              placeScore={place.placeScore}
              onClick={() => navigate("/detail")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
