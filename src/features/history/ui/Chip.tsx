interface ChipProps {
  isComplete: boolean;
}

const Chip = ({ isComplete }: ChipProps) => {
  return (
    <div
      className={`flex gap-[2px] px-3 py-1 w-fit rounded-[40px] ${isComplete ? "bg-gray-5 text-gray-30" : "bg-sub-10 text-sub-sub"}`}>
      <img src={isComplete ? "/icon/check.svg" : "/icon/review.svg"} alt="icon" />
      {isComplete ? "작성완료" : "리뷰작성"}
    </div>
  );
};

export { Chip };
