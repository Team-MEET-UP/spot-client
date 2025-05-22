import { Photo, PlaceButton, PlaceInfo, Review } from "@/features/detail/ui";
import { Empty } from "@/features/detail/ui";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ShareModal } from "@/shared/ui";
import { DetailHeader } from "@/widgets/headers";
import { usePlaceInfo } from "@/features/detail/hooks";

const DetailPage = () => {
  const navigate = useNavigate();
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsScrolled(scrollRef.current.scrollTop > 0);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { eventId, placeId } = useParams();

  if (!placeId || !eventId) return <p>잘못된 접근입니다</p>;

  const { data, isLoading, isError } = usePlaceInfo({ placeId: placeId, eventId: eventId });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>유저 정보를 가져오는 데 실패했습니다.</p>;
  if (!data) return <p>데이터 없음</p>;

  const shareContent = {
    title: data.isConfirmed ? "여기서 만나요!" : "여기 어때요?",
    description: data.name,
    imageUrl: "https://www.pickspot.co.kr/image/KT3.webp",
    links: [{ label: "모임 장소 보기", url: `https://www.pickspot.co.kr/mapView/${eventId}` }],
  };

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="relative flex flex-col h-screen-dvh">
      <DetailHeader
        backClick={handleClick}
        shareClick={() => setIsOpenShareModal(true)}
        isScrolled={isScrolled}
        name={data.name}
      />
      <div className="flex-1 overflow-y-auto scrollbar-hidden mb-[88px]" ref={scrollRef}>
        <Photo images={data.images} />
        <PlaceInfo
          placeId={data.kakaoPlaceId}
          distance={data.distance}
          name={data.name}
          averageRating={data.averageRating}
          openTime={data.openTime}
          closeTime={data.closeTime}
        />
        <div className="w-full h-2 bg-gray-5" />
        {data.reviews.length > 0 || data.googleReviews.length > 0 ? (
          <Review
            placeQuietnessResponse={data.placeQuietnessResponse}
            placeScore={data.placeScore}
            reviews={data.reviews}
            googleReviews={data.googleReviews}
          />
        ) : (
          <Empty />
        )}
      </div>
      <PlaceButton eventId={eventId} placeId={placeId} isChanged={data.isChanged} isConfirmed={data.isConfirmed} />
      {isOpenShareModal && (
        <ShareModal
          onClose={() => setIsOpenShareModal(false)}
          title="모임장소가 정해졌어요!"
          description="멤버들에게 알려주세요"
          shareContent={shareContent}
        />
      )}
    </div>
  );
};

export default DetailPage;
