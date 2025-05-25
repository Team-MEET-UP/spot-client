import { Modal } from ".";
import reviewComplete from "@/assets/icon/reviewComplete.svg";
import Button from "./Button";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <div className="flex flex-col items-center justify-center p-4 gap-1 text-center">
        <img src={reviewComplete} alt="리뷰 완료 아이콘" className="w-[160px] h-[160px]" />
        <label className="text-lg font-semibold">솔직한 리뷰 감사합니다!</label>
        <p className="text-sm text-gray-600">SPOT이 더 정확하고 유용해졌어요</p>
        <Button onClick={onClose} className="mt-6 w-full bg-gray-90 text-white py-3 rounded-xl text-sm font-semibold">
          확인
        </Button>
      </div>
    </Modal>
  );
};
