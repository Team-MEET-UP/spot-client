import { useValidation } from "@/shared/hooks";
import { validateName } from "@/shared/utils";
import Button from "@/shared/ui/Button";
import { useEffect, useState } from "react";
import { InputField } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { PlainHeader } from "@/widgets/headers";

interface NameStepProps {
  setCurrentStep: (step: number) => void;
  setName: (name: string) => void;
  name: string;
}

export const NameStep = ({ setCurrentStep, setName, name }: NameStepProps) => {
  const { value, error, handleChange, validateValue, isValid } = useValidation(name, validateName);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const windowHeight = window.innerHeight;
        const keyboardHeight = windowHeight - viewportHeight;
        setKeyboardHeight(keyboardHeight > 0 ? keyboardHeight : 0);
      }
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (!validateValue()) return;
    setName(value);
    setCurrentStep(1);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 px-4">
        <div className="flex flex-col gap-6">
          <PlainHeader title="출발지 추가" onBack={() => navigate(-1)} />
          <p className="text-gray-90 text-xxl font-bold">
            모임에서 사용할
            <br />
            <span className="text-sub-sub">이름</span>을 알려주세요
          </p>
          <InputField
            value={value}
            placeholder="5글자 내로 입력해주세요"
            onChange={handleChange}
            error={error}
            type="name"
          />
        </div>
      </div>
      <div
        className="px-4 mb-5 transition-all duration-300"
        style={{
          marginBottom: keyboardHeight > 0 ? `${keyboardHeight + 20}px` : "20px",
        }}>
        <Button onClick={handleNext} disabled={!isValid}>
          다음
        </Button>
      </div>
    </div>
  );
};
