import { InputField } from "@/features/find/ui";
import { useValidation } from "@/shared/hooks";
import Button from "@/shared/ui/Button";
import { validateName } from "@/shared/utils";

const FindPage = () => {
  const { value, error, isValid, handleChange, validateValue } = useValidation(
    "",
    validateName
  );

  const handleNext = () => {
    if (!validateValue()) return;
    // 다음 단계로 넘어가는 로직
  };

  return (
    <div>
      <InputField 
        value={value} 
        placeholder="이름을 알려주세요." 
        onChange={handleChange} 
        error={error} 
      />
      <Button 
        onClick={handleNext}
        disabled={!isValid}
      >
        다음
      </Button>
    </div>
  );
};

export default FindPage;
