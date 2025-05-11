import { NameStep } from "./NameStep";
import { LocationStep } from "./LocationStep";
import { useState } from "react";
import { StartPointInfo } from "../model";
import { useFindStore } from "@/shared/stores";

export const FindContainer = () => {
  const { name } = useFindStore();
  const [currentStep, setCurrentStep] = useState(() => (name !== "" ? 1 : 0));
  const [startPointInfo, setStartPointInfo] = useState<StartPointInfo | null>(null);

  return (
    <div className="flex-1 gap-y-[16px]">
      {currentStep === 0 && <NameStep setCurrentStep={setCurrentStep} />}
      {currentStep === 1 && (
        <LocationStep
          setCurrentStep={setCurrentStep}
          startPointInfo={startPointInfo}
          setStartPointInfo={setStartPointInfo}
        />
      )}
    </div>
  );
};
