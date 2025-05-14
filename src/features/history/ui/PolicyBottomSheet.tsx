import { BottomSheet } from "@/shared/ui";
import { Overlay } from "@/shared/ui/BottomSheet/Overlay";
import Button from "@/shared/ui/Button";
import { useState } from "react";
import { CheckBox } from "./CheckBox";
import { useStoreAgreement } from "../hooks";

interface PolicyBottomSheetProps {
  onClose: () => void;
}

export const PolicyBottomSheet = ({ onClose }: PolicyBottomSheetProps) => {
  const { mutate } = useStoreAgreement();
  const [firstCheckBox, setFirstCheckBox] = useState(false);
  const [secondCheckBox, setSecondCheckBox] = useState(false);

  const handleClick = () => {
    if (firstCheckBox) {
      mutate(
        {
          isPersonalInfoAgreement: firstCheckBox,
          isMarketingAgreement: secondCheckBox,
        },
        {
          onSuccess: () => {
            onClose();
          },
          onError: error => {
            console.error("약관 동의 요청 실패", error);
          },
        }
      );
    } else {
      setFirstCheckBox(true);
      setSecondCheckBox(true);
    }
  };

  return (
    <>
      <Overlay isBlur={false} />
      <BottomSheet minHeightPx={330} maxHeightPx={330}>
        <BottomSheet.Header />
        <div className="flex flex-col gap-10 pt-4 p-5 h-full">
          <div>
            <span className="text-lg font-bold text-gray-80 mb-[2px]">잠깐만요!</span>
            <p className="text-md font-medium text-gray-40 mb-8">서비스 이용을 위해 약관에 동의해주세요</p>
            <div className="flex flex-col gap-5">
              <CheckBox
                label="이용약관 및 개인정보처리방침(필수)"
                isChecked={firstCheckBox}
                onToggle={() => setFirstCheckBox(prev => !prev)}
              />
              <CheckBox
                label="마케팅 수신 동의(선택)"
                isChecked={secondCheckBox}
                onToggle={() => setSecondCheckBox(prev => !prev)}
              />
            </div>
          </div>
          <Button onClick={handleClick}>{firstCheckBox ? "완료" : "모두 동의하기"}</Button>
        </div>
      </BottomSheet>
    </>
  );
};
