import { BackHeader } from "@/widgets/headers";
import { ReasonForm } from "./ReasonForm";
import { LocationInput } from "./LocationInput";
import { CompleteButton } from "./CompleteButton";
import { useState } from "react";

interface OtherPlaceFormProps {
  selectedReasons: string[];
  setSelectedReasons: React.Dispatch<React.SetStateAction<string[]>>;
  handleLocationStep: () => void;
}

export const OtherPlaceForm = ({ selectedReasons, setSelectedReasons, handleLocationStep }: OtherPlaceFormProps) => {
  const [directInput, setDirectInput] = useState("");

  const handleComplete = () => {
    if (directInput.trim()) {
      setSelectedReasons(prev => {
        const newReasons = [...prev, directInput.trim()];
        return newReasons;
      });
      setDirectInput("");
    }
    console.log("완료 버튼 클릭 - 현재 선택된 모든 이유:", selectedReasons);
    handleLocationStep();
  };

  return (
    <div className="relative min-h-screen pb-[80px]">
      <BackHeader />
      <div className="px-5">
        <ReasonForm
          selectedReasons={selectedReasons}
          setSelectedReasons={setSelectedReasons}
          directInput={directInput}
          setDirectInput={setDirectInput}
        />
        <LocationInput handleLocationStep={handleLocationStep} />
      </div>

      <div className="absolute bottom-[20px] left-0 w-full px-5">
        <CompleteButton label="완료하기" onClick={handleComplete} />
      </div>
    </div>
  );
};
