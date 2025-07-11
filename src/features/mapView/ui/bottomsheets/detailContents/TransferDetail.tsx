import ArrowLine from "@/assets/icon/rightArrowLine.svg";
import Setting from "@/assets/icon/setting.svg";
import Edit from "@/assets/icon/edit.svg";
import Delete from "@/assets/icon/delete.svg";
import { useState } from "react";

interface TransferDetailProps {
  averageDuration: number;
  startPoint: string;
  endPoint: string;
}

export const TransferDetail = ({ averageDuration, startPoint, endPoint }: TransferDetailProps) => {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="flex flex-col px-5 py-4 gap-1">
      <span className="text-xl font-bold text-gray-90">{averageDuration}분</span>
      <div className="relative flex justify-between items-center">
        <div className="flex gap-1 items-center text-md font-semibold text-gray-60">
          {startPoint}
          <img src={ArrowLine} alt="arrow" className="w-4 h-4" />
          {endPoint}
        </div>
        <button onClick={() => setOpenSettings(prev => !prev)}>
          <img src={Setting} alt="setting" className="w-[3px] h-[15px] cursor-pointer" />
        </button>
        {openSettings && (
          <div className="absolute top-[35px] right-0 z-50 w-[175px] h-[98px] rounded-[20px] shadow-pin02">
            <div className="px-5 py-[14px] items-center gap-[26px] flex cursor-pointer">
              <p className="font-medium text-gray-80 text-sm">출발지 수정하기</p>
              <img src={Edit} alt="edit" className="w-5 h-5" />
            </div>
            <div className="px-5 py-[14px] items-center gap-[26px] flex cursor-pointer">
              <p className="font-medium text-gray-80 text-sm">출발지 삭제하기</p>
              <img src={Delete} alt="delete" className="w-5 h-5" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
