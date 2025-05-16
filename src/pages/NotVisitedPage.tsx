import { VisitedPlaceProps } from "@/features/notVisited/model";
import { OtherPlaceForm, PlaceSearch } from "@/features/notVisited/ui";
import { useState } from "react";

const NotVisitedPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [visitedPlace, setVisitedPlace] = useState<VisitedPlaceProps | null>(null);

  const handleLocationStep = () => {
    setCurrentStep(2);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 검색 로직 구현
  };


  return (
    <div className="flex flex-col h-screen-dvh">
      {currentStep === 1 && (
        <OtherPlaceForm unvisitedReason={selectedReasons} handleLocationStep={handleLocationStep} />
      )}
      {currentStep === 2 && (
        <PlaceSearch 
          setCurrentStep={() => setCurrentStep(1)} 
          visitedPlace={visitedPlace || { name: "", latitude: 0, longitude: 0, roadAddress: "", regionName: "" }}
          onChange={handleSearchChange}
          setVisitedPlace={setVisitedPlace}
        />
      )}
    </div>
  );
};

export default NotVisitedPage;
