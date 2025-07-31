import { Modal } from "@/shared/ui";

interface DeleteModalProps {
  endPoint: string;
  onClose: () => void;
}

const DeleteModal = ({ endPoint, onClose }: DeleteModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="px-5 py-[28px] flex flex-col gap-1 items-center">
        <span className="text-sub-sub text-md font-semibold">{endPoint}역</span>
        <p className="text-gray-90 text-md font-semibold">출발지를 삭제하시겠어요?</p>
      </div>
      <div className="flex w-full">
        <div
          className="w-1/2 flex justify-center items-center py-3 text-gray-40 text-sm font-medium border-t border-t-gray-5 cursor-pointer"
          onClick={onClose}>
          돌아가기
        </div>
        <div className="w-1/2 flex justify-center items-center py-3 text-white text-sm font-semibold border-t bg-gray-90 rounded-br-[20px] cursor-pointer">
          삭제하기
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
