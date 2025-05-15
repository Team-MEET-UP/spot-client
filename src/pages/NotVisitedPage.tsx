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
  const [reason, setReason] = useState("");
  const [visitedPlace, setVisitedPlace] = useState<VisitedPlaceProps | null>(null);

  return (
    <div>
      {currentStep === 1 && <p>notvisited</p>}
      {currentStep === 2 && <p>search location</p>}
    </div>
  );
};

export default NotVisitedPage;
