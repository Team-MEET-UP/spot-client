import { useMapStore } from "@/shared/stores";
import { UserCard } from "./UserCard";
import { useState } from "react";
import { LoginModal, ShareModal } from ".";

export const BottomSheetContent = () => {
  const { users, meetingPoint } = useMapStore();

  return (
    <div className="h-full flex flex-col">
      <div className="mx-5">
        <div>
          <h1 className="text-gray-80 text-lg font-bold">{meetingPoint.stationName}</h1>
          <p className="text-gray-40 text-md">{meetingPoint.averageDuration}</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto mx-5 pb-[80px] scrollbar-hidden" data-scrollable="true">
        {users.map(user => (
          <UserCard key={user.id} name={user.name} startStation={user.startStation} totalTime={user.totalTime} />
        ))}
      </div>
    </div>
  );
};

export const FixedButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false); // 추후 로그인 상태인지 검증하는 로직 구현예정
  // const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-5">
      <div className="flex flex-row gap-2">
        <button
          className="flex flex-row items-center justify-center gap-2 rounded-md bg-sub-sub h-[40px] text-white font-semibold text-sm w-full"
          onClick={() => setIsOpenLoginModal(true)}>
          <img src="./icon/addUser.svg" alt="addUser" />
          <span>멤버 추가하기</span>
        </button>
        <button className="flex justify-center items-center bg-gray-5 w-[40px] h-[40px] rounded-md">
          <img src="./icon/share.svg" alt="share" onClick={() => setIsOpen(true)} />
        </button>
      </div>
      {isOpen && <ShareModal onClose={() => setIsOpen(false)} />}
      {isOpenLoginModal && <LoginModal />}
    </div>
  );
};
