import { BackHeader } from "@/widgets/headers";
import { ReasonForm } from "./ReasonForm";

interface OtherPlaceFormProps {
  unvisitedReason: string[];
}

export const OtherPlaceForm = ({ unvisitedReason }: OtherPlaceFormProps) => {
  return (
    <div>
      <BackHeader />
      <ReasonForm />
    </div>
  );
};
