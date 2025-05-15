import { useState } from "react";

const REASONS = ["시끄러워서", "사람이 너무 많아서", "공간이 어두워서", "좌석이 부족해서"];

export const ReasonForm = () => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const handleSelect = (reason: string) => {
    setSelectedReasons(prev => (prev.includes(reason) ? prev.filter(r => r !== reason) : [...prev, reason]));
  };

  // 버튼들을 2개씩 그룹화
  const buttonPairs = [];
  for (let i = 0; i < REASONS.length; i += 2) {
    buttonPairs.push(REASONS.slice(i, i + 2));
  }

  return (
    <div className="px-5">
      <h1 className="text-lg font-bold text-gray-70 mb-6">가지 않은 이유가 무엇인가요?</h1>
      <div className="flex flex-col gap-[12px] mb-4">
        {buttonPairs.map((pair, index) => (
          <div key={index} className="flex gap-[12px]">
            {pair.map(reason => (
              <button
                key={reason}
                onClick={() => handleSelect(reason)}
                className={`w-fit px-4 py-3 rounded-2xl border cursor-pointer text-sm font-semibold
              ${
                selectedReasons.includes(reason)
                  ? "bg-white text-sub-sub border-sub-sub"
                  : "bg-gray-white text-gray-40 border-gray-10"
              }
            `}>
                {reason}
              </button>
            ))}
          </div>
        ))}
      </div>
      <input
        placeholder="직접 입력하기"
        className="w-full px-4 py-3 rounded-xl border border-gray-40 focus:outline-none focus:ring-0 focus:border-gray-40 text-base text-gray-60 placeholder:text-gray-40"
      />
    </div>
  );
};
