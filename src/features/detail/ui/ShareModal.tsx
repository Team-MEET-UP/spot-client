import { Modal } from "@/shared/ui";

interface ShareModalProps {
  onClose: () => void;
}

const shareItems = [
  {
    src: "/icon/linkCopy.svg",
    alt: "linkCopy",
    label: "링크 복사",
  },
  {
    src: "/icon/kakaoShare.svg",
    alt: "kakaoShare",
    label: "카카오톡",
  },
];

export const ShareModal = ({ onClose }: ShareModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="relative p-5 pb-[20px] flex flex-col gap-6 items-center">
        <div className="text-center">
          <span className="text-md font-semibold text-gray-90">
            약속 장소가 확정됐어요! <br />
            이벤트를 공유해보세요
          </span>
          <button onClick={onClose}>
            <img src="/icon/closeGray.svg" alt="close" className="absolute top-5 right-5" />
          </button>
        </div>
        <div className="flex gap-6">
          {shareItems.map(({ src, alt, label }) => (
            <div key={label} className="flex flex-col gap-2 items-center">
              <img src={src} alt={alt} />
              <p className="text-xs font-medium text-gray-80">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
