import { Modal } from "@/shared/ui";

interface ShareModalProps {
  onClose: () => void;
}

export const ShareModal = ({ onClose }: ShareModalProps) => {
  return (
    <Modal>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-md font-semibold text-gray-90">링크 공유하기</h1>
            <p className="text-xs text-description font-semibold">멤버가 출발지를 직접 입력할 수 있어요</p>
          </div>
          <button onClick={onClose}>
            <img src="/icon/close.svg" alt="닫기" />
          </button>
        </div>

        <div className="flex flex-row gap-6 justify-center items-center text-gray-80 text-xs text-center">
          <div>
            <img src="/icon/share/link.svg" alt="링크 복사" />
            <p>링크 복사</p>
          </div>
          <div>
            <img src="/icon/share/kakao.svg" alt="카카오톡 공유" />
            <p>카카오톡</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
