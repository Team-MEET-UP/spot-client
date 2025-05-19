import Plug from "@/assets/icon/plug.svg";
import Seat from "@/assets/icon/seat.svg";

interface PlaceChipProps {
  label: string;
}

///@TODO chip 종류 추가하기
const chipMapping: Record<string, { icon: string; parts: [string, string] }> = {
  "콘센트 많음": { icon: Plug, parts: ["콘센트", "많음"] },
  "좌석 많음": { icon: Seat, parts: ["좌석", "많음"] },
};

const PlaceChip = ({ label }: PlaceChipProps) => {
  const chip = chipMapping[label];

  // chip이 매핑되지 않는 경우
  if (!chip) return;

  const [prefix, emphasis] = chip.parts;

  return (
    <div className="flex gap-[1px] py-[3px] px-[6px] bg-gray-5 rounded-[6px] items-center font-semibold text-xs">
      <img src={chip.icon} alt={label} className="w-4 h-4 mr-[2px]" />
      <span className="text-gray-70">{prefix}</span>
      <span className="text-gray-90 ml-[1px]">{emphasis}</span>
    </div>
  );
};

export default PlaceChip;
