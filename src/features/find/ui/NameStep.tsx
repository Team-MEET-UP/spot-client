import { useValidation } from "@/shared/hooks";
import { useFindStore } from "@/shared/stores";
import { validateName } from "@/shared/utils";
import { InputField } from "./InputField";
import Button from "@/shared/ui/Button";
import PlainHeader from "@/shared/ui/PlainHeader";

const NameStep = () => {
  const { name, setName, nextStep } = useFindStore();
  const { value, error, handleChange, validateValue, isValid } = useValidation(name, validateName);
  const handleNext = () => {
    if (!validateValue()) return;
    setName(value);
    nextStep();
  };
  return (
    <div className="flex flex-col gap-4">
      <PlainHeader title="멤버 추가" url="/" />
      <p className="text-gray-90 text-lg font-semibold">
        멤버 추가를 위해
        <br />
        이름과 출발지를 입력해주세요.
      </p>
      <InputField value={value} placeholder="이름을 입력해주세요" onChange={handleChange} error={error} />
      <Button onClick={handleNext} disabled={!isValid}>
        다음
      </Button>
    </div>
  );
};

export { NameStep };
