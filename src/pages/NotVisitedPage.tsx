import { OtherPlaceForm } from "@/features/notVisited/ui";
import { useState } from "react";

interface VisitedPlaceProps {
  name: string;
  latitude: number;
  longitude: number;
  roadAddress: string;
  regionName: string;
}

const NotVisitedPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [unvisitedReason, setUnvisitedReason] = useState("");
  const [visitedPlace, setVisitedPlace] = useState<VisitedPlaceProps | null>(null);

  return (
    <div className="flex flex-col h-screen-dvh">
      {currentStep === 1 && <OtherPlaceForm unvisitedReason={unvisitedReason} />}
      {currentStep === 2 && <p>search location</p>}
    </div>
  );
};

export default NotVisitedPage;
