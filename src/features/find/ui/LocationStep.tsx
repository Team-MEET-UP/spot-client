import { useFindStore } from "@/shared/stores";
import { InputField } from "./InputField";
import Button from "@/shared/ui/Button";
import { GetLocaitonButton } from ".";
import { useState } from "react";

const LocationStep = () => {
  const { startPoint, setStartPoint, prevStep } = useFindStore();
  const [value, setValue] = useState(startPoint || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const validateValue = () => {
    return value.trim().length > 0;
  };

  const handleComplete = () => {
    if (!validateValue()) return;
    setStartPoint(value);
    // TODO: 완료 처리
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      <InputField value={value} placeholder="출발지를 입력해주세요" onChange={handleChange} />
      <GetLocaitonButton />
      <div className="flex gap-2">
        <Button onClick={handleComplete}>완료</Button>
      </div>
    </div>
  );
};

export { LocationStep };
