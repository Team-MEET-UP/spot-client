import { useFindStore } from "@/shared/stores";
import { InputField } from "./InputField";
import { useValidation } from "@/shared/hooks";
import { validateName } from "@/shared/utils";
import Button from "@/shared/ui/Button";
import { GetLocaitonButton } from ".";

const LocationStep = () => {
  const { startPoint, setStartPoint, prevStep } = useFindStore();
  const { value, error, handleChange, validateValue } = useValidation(startPoint, validateName);

  const handleComplete = () => {
    if (!validateValue()) return;
    setStartPoint(value);
    // TODO: 완료 처리
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      <InputField value={value} placeholder="출발지를 입력해주세요" onChange={handleChange} error={error} />
      <GetLocaitonButton />
      <div className="flex gap-2">
        <Button onClick={handleComplete}>완료</Button>
      </div>
    </div>
  );
};

export { LocationStep };
