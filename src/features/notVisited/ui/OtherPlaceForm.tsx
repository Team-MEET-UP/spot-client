import { BackHeader } from "@/widgets/headers";
import { ReasonForm } from "./ReasonForm";
import { LocationInput } from "./LocationInput";
import { CompleteButton } from "./CompleteButton";

interface OtherPlaceFormProps {
  unvisitedReason: string[];
}

export const OtherPlaceForm = ({ unvisitedReason }: OtherPlaceFormProps) => {
  return (
    <div className="relative min-h-screen pb-[80px]">
      <BackHeader />
      <div className="px-5">
        <ReasonForm />
        <LocationInput />
      </div>

      <div className="fixed bottom-[20px] left-0 w-full px-5">
        <CompleteButton label="완료하기" />
      </div>
    </div>
  );
};
