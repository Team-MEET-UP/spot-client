import { TransitRoute } from "@/shared/model";
import { subwayLine } from "../../config/subwayLine";

export const SubwayPath = ({ endBoardName, laneName, sectionTime, startBoardName, stationCount }: TransitRoute) => {
  const findMetroKey = (lineName: string) => {
    if (subwayLine[lineName]) return subwayLine[lineName];

    const foundKey = Object.keys(subwayLine).find(key => lineName.startsWith(key));
    return foundKey ? subwayLine[foundKey] : null;
  };

  const lineType = findMetroKey(laneName!);

  if (!lineType) return null;

  return (
    <>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center w-fit">
          <div
            className={`flex w-6 h-6 justify-center items-center ${lineType.bg} rounded-[30px] text-sm font-semibold text-white`}>
            {lineType.text && lineType.text}
          </div>
          <div className={`h-[55px] w-1 ${lineType.bg}`} />
          <div
            className={`flex w-6 h-6 justify-center items-center ${lineType.bg} rounded-[30px] text-sm font-semibold text-white`}>
            {lineType.text && lineType.text}
          </div>
        </div>
        <div className="flex flex-col text-md font-medium text-gray-90">
          <span className="mb-[2px]">{startBoardName}역 승차</span>
          <div className="flex items-center gap-[6px] text-sm mb-8">
            <p className="font-semibold text-gray-50">{sectionTime}분</p>
            <p className="text-gray-30">{stationCount}개 역 이동</p>
          </div>
          <span>{endBoardName}역 하차</span>
        </div>
      </div>
      <img src="/icon/shortPath.svg" alt="shortPath" className="ml-[11px] w-[2px]" />
    </>
  );
};
