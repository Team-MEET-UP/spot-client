import { useEventStore, useUserStore } from "@/shared/stores";
import { UserCard } from "./UserCard";
import { useState } from "react";
import { LoginModal } from ".";
import { ShareModal } from "@/shared/ui";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCookie } from "@/shared/utils";

export const BottomSheetContent = () => {
  const eventData = useEventStore(state => state.eventData);
  const startPointId = getCookie("startPointId");

  // 정렬된 routeResponse 만들기
  const sortedRouteResponse = (() => {
    if (!eventData?.routeResponse || !startPointId) return eventData?.routeResponse;

    const matched = eventData.routeResponse.find(user => user.id === startPointId);
    const others = eventData.routeResponse.filter(user => user.id !== startPointId);

    return matched ? [matched, ...others] : eventData.routeResponse;
  })();
  console.log(sortedRouteResponse);

  return (
    <div className="h-full flex flex-col">
      <div className="mx-5">
        <div>
          <h1 className="text-gray-80 text-lg font-bold">{eventData?.meetingPoint.endStationName}</h1>
          <p className="text-gray-40 text-md">평균 {eventData?.averageTime}분</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto mx-5 pb-[80px] scrollbar-hidden" data-scrollable="true">
        {sortedRouteResponse?.map(user => (
          <UserCard key={user.id} name={user.nickname} startStation={user.startName} totalTime={user.totalTime} />
        ))}
      </div>
    </div>
  );
};

export const FixedButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const eventId = new URLSearchParams(window.location.search).get("eventId");
  const shareContent = {
    title: "님이 모임을 생성했어요",
    description: "",
    imageUrl: "https://meetup-client-silk.vercel.app/image/main.png",
    links: [
      { label: "내 출발지 입력", url: `https://meetup-client-silk.vercel.app/find?eventId=${eventId}` },
      { label: "중간지점 보기", url: `https://meetup-client-silk.vercel.app/mapView?eventId=${eventId}` },
    ],
  };
  const nickname = useUserStore(state => state.nickname);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventIdParam = searchParams.get("eventId");

  const handleAddMemberClick = () => {
    if (nickname) {
      navigate(`/find?eventId=${eventIdParam}`);
    } else {
      setIsOpenLoginModal(true);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-5">
      <div className="flex flex-row gap-2">
        <button
          className="flex flex-row items-center justify-center gap-2 rounded-md bg-sub-sub h-[40px] text-white font-semibold text-sm w-full"
          onClick={handleAddMemberClick}>
          <img src="./icon/addUser.svg" alt="addUser" />
          <span>멤버 추가하기</span>
        </button>
        <button className="flex justify-center items-center bg-gray-5 w-[40px] h-[40px] rounded-md">
          <img src="./icon/share.svg" alt="share" onClick={() => setIsOpen(true)} />
        </button>
      </div>
      {isOpen && (
        <ShareModal
          onClose={() => setIsOpen(false)}
          title="링크 공유하기"
          description="멤버가 출발지를 직접 입력할 수 있어요"
          shareContent={shareContent}
        />
      )}
      {isOpenLoginModal && <LoginModal />}
    </div>
  );
};
