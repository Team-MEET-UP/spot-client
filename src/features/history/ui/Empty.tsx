export const Empty = () => {
  return (
    <div className="mt-[100px] flex flex-col items-center gap-[2px]">
      <div className="w-[160px] h-[160px] bg-gray-20" /> {/* 임시 이미지 */}
      <span className="text-md font-semibold text-gray-40">아직 참여한 모임이 없어요</span>
      <p className="text-sm font-medium text-gray-30">지금 참여하거나 새로운 모임을 만들어보세요!</p>
    </div>
  );
};
