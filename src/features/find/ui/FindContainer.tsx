import { useFindStore } from "@/shared/stores";
import { NameStep } from "./NameStep";
import { LocationStep } from "./LocationStep";

const FindContainer = () => {
  const { currentStep } = useFindStore();

  return (
    <div className="flex-1 gap-y-[16px]">
      <p className="text-gray-90 text-lg font-semibold p-[20px]">
        멤버 추가를 위해
        <br />
        이름과 출발지를 입력해주세요.
      </p>
      {currentStep === 0 && <NameStep />}
      {currentStep === 1 && <LocationStep />}
    </div>
  );
};

export { FindContainer };
