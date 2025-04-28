import { useFindStore } from "@/shared/stores";
import { InputField } from "./InputField";
import Button from "@/shared/ui/Button";
import { GetLocaitonButton } from ".";
import { useState, useEffect } from "react";
import PlainHeader from "@/shared/ui/PlainHeader";

const LocationStep = () => {
  const { startPoint, setStartPoint, prevStep } = useFindStore();
  const [value, setValue] = useState(startPoint || "");
  const [keyboardHeight, setKeyboardHeight] = useState(0);

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
    <div className="flex flex-col h-full">
      <div className="flex-1 px-4">
        <div className="flex flex-col gap-4">
          <PlainHeader title="멤버 추가" onBack={prevStep} />
          <p className="text-gray-90 text-lg font-semibold">
            멤버 추가를 위해
            <br />
            이름과 출발지를 입력해주세요.
          </p>
          <InputField value={value} placeholder="출발지를 입력해주세요" onChange={handleChange} />
          <GetLocaitonButton />
        </div>
      </div>
      <div
        className="px-4 mb-5 transition-all duration-300"
        style={{
          marginBottom: keyboardHeight > 0 ? `${keyboardHeight + 20}px` : "20px",
        }}>
        <Button onClick={handleComplete} disabled={!validateValue()}>
          완료
        </Button>
      </div>
    </div>
  );
};

export { LocationStep };
