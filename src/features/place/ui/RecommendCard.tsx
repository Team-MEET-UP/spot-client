interface RecommendCardProps {
  place: string;
}

export const RecommendCard = ({ place }: RecommendCardProps) => {
  return (
    <div className="py-[29px]">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">
          <span className=" text-sub-sub ">{place}</span> <br />
          <span className="text-gray-90">여기 어때요?</span>
        </h1>
        <p className="text-gray-50 text-sm font-medium">스팟의 추천 장소를 확인해보세요</p>
      </div>
      {/* 예시 이미지 */}
    </div>
  );
};
