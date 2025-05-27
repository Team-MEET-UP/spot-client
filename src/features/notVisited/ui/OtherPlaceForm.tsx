import { BackHeader } from "@/widgets/headers";
import { ReasonForm } from "./ReasonForm";
import { LocationInput } from "./LocationInput";
import { NonVisitedReasonCategory, VisitedPlaceProps } from "../model";
import Button from "@/shared/ui/Button";

interface OtherPlaceFormProps {
  selectedReasons: NonVisitedReasonCategory[];
  setSelectedReasons: React.Dispatch<React.SetStateAction<NonVisitedReasonCategory[]>>;
  handleLocationStep: () => void;
  selectedPlace: VisitedPlaceProps | null;
  setEtcReason: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (reason?: string) => void;
  isSubmitting: boolean;
  directInput: string;
  setDirectInput: React.Dispatch<React.SetStateAction<string>>;
}

export const OtherPlaceForm = ({
  selectedReasons,
  setSelectedReasons,
  handleLocationStep,
  selectedPlace,
  setEtcReason,
  onSubmit,
  isSubmitting,
  directInput,
  setDirectInput,
}: OtherPlaceFormProps) => {
  const handleComplete = () => {
    if (directInput.trim()) {
      setEtcReason(directInput.trim());
      onSubmit(directInput.trim());
    } else {
      onSubmit();
    }
  };
  const isFormValid = selectedReasons.length > 0 && selectedPlace !== null;
  const isDisabled = isSubmitting || !isFormValid;

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
        <LocationInput handleLocationStep={handleLocationStep} selectedPlace={selectedPlace} />
      </div>

      <div className="fixed bottom-[20px] left-0 right-0 px-5 max-w-[600px] mx-auto">
        <Button
          onClick={handleComplete}
          disabled={isDisabled}
          className={`w-full h-[52px] text-white transition text-lg font-semibold rounded-xl
      ${isDisabled ? "bg-gray-10 text-gray-30 cursor-not-allowed" : "bg-gray-90"}
    `}>
          완료하기
        </Button>
      </div>
    </div>
  );
};
