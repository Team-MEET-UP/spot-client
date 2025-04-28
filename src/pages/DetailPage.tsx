import Empty from "@/features/detail/ui/Empty";
import Photo from "@/features/detail/ui/Photo";
import PlaceInfo from "@/features/detail/ui/PlaceInfo";
import Review from "@/features/detail/ui/Review";
import Button from "@/shared/ui/Button";

// @TODO 백엔드 데이터 구조에 따라 아래와 같은 type 설정 후 props로 관리하는 구조로 변경해야 함!
interface Review {
  username: string;
  profileImg: string;
  date: string;
  text: string;
}

interface DetailDataProps {
  id: number;
  placeName: string;
  distance: number;
  images: string[];
  openinghours: string;
  totalScore: string;
  congestion: {
    morning: number;
    afternoon: number;
    evening: number;
  };
  plugScore: number;
  seatScore: number;
  review: Review[];
}

const images = [
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
];

const DetailPage = () => {
  const isReview = true;
  const isComplete = true; // 약속 장소 확정 유무

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <Photo images={images} />
        <PlaceInfo />
        <div className="w-full h-2 bg-gray-5" />
        {isReview ? <Review /> : <Empty />}
      </div>

      <div className={`px-5 py-4 ${isReview ? "sticky bottom-0" : ""}`}>
        <Button disabled={isComplete}>{isComplete ? "장소 확정 완료" : "약속 장소 확정하기"}</Button>
      </div>
    </div>
  );
};

export default DetailPage;
