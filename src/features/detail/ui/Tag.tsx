interface TagProps {
  type: "plug" | "seat";
  score: 1 | 2 | 3 | 4 | 5;
}

const typeInfo = {
  plug: {
    label: "콘센트",
    iconSrc: "/icon/plug.svg",
    scoreText: {
      5: "아주 많아요",
      4: "많아요",
      3: "적당해요",
      2: "부족해요",
      1: "콘센트가 없어요",
    },
  },
  seat: {
    label: "좌석",
    iconSrc: "/icon/seat.svg",
    scoreText: {
      5: "아주 많아요",
      4: "많아요",
      3: "적당해요",
      2: "부족해요",
      1: "많이 부족해요",
    },
  },
} as const;

const Tag = ({ type, score }: TagProps) => {
  const { label, iconSrc, scoreText } = typeInfo[type];

  return (
    <div className="w-full px-4 py-2 rounded-[10px] border border-gray-5 flex justify-between items-center text-sm">
      <div className="flex gap-[2px] items-center">
        <img src={iconSrc} alt={type} />
        <p className="font-medium text-gray-70">{label}</p>
      </div>
      <p className="font-semibold text-gray-90">{scoreText[score]}</p>
    </div>
  );
};

export default Tag;
