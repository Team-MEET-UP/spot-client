import React, { useRef, useState } from "react";
import Plug from "@/assets/icon/plug.svg";
import SeatGray from "@/assets/icon/seatGray.svg";
import People from "@/assets/icon/people.svg";

type LabelType = keyof typeof infoMap;

interface ScoreSelectorProps {
  label: LabelType;
  score: number | null;
  onChange: (value: number) => void;
}

const infoMap: Record<string, { icon: string; texts: Record<number, string> }> = {
  콘센트: {
    icon: Plug,
    texts: {
      1: "없어요",
      2: "부족해요",
      3: "적당해요",
      4: "많아요",
      5: "아주 많아요",
    },
  },
  좌석: {
    icon: SeatGray,
    texts: {
      1: "많이 부족해요",
      2: "부족해요",
      3: "적당해요",
      4: "많아요",
      5: "아주 많아요",
    },
  },
  한산함: {
    icon: People,
    texts: {
      1: "매우 한산해요",
      2: "한산해요",
      3: "적당해요",
      4: "약간 붐벼요",
      5: "매우 붐벼요",
    },
  },
};

const ScoreSelector = ({ label, score, onChange }: ScoreSelectorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const scores = [1, 2, 3, 4, 5];
  const imageSrc = infoMap[label]?.icon;
  const currentText = score !== null ? infoMap[label].texts[score] : "";

  const handleSelectByPosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const relativeX = clientX - rect.left;
    const widthPerScore = rect.width / 5;
    const selected = Math.min(5, Math.max(1, Math.ceil(relativeX / widthPerScore)));
    if (selected !== score) onChange(selected);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSelectByPosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleSelectByPosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleSelectByPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSelectByPosition(e.touches[0].clientX);
  };

  return (
    <div className="flex flex-col gap-3 w-full select-none">
      <div className="flex items gap-[2px] text-md font-semibold text-gray-60 items-center">
        {imageSrc && <img src={imageSrc} alt="아이콘" className="w-5 h-5" />}
        {label}
        {currentText && <span className="text-sub-sub text-sm font-medium ml-[6px]">{currentText}</span>}
      </div>

      <div
        ref={containerRef}
        className="flex items-center w-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        {scores.map((num, idx) => (
          <React.Fragment key={num}>
            <button
              onClick={() => onChange(num)}
              className={`w-6 h-6 rounded-full shrink-0 transition-colors duration-150
                ${score !== null && num <= score ? "bg-sub-sub" : "bg-gray-10"}`}
            />
            {idx < scores.length - 1 && (
              <div className={`flex-1 h-1 ${score !== null && num < score ? "bg-sub-sub" : "bg-gray-10"}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScoreSelector;
