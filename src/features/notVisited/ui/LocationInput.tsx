import locationPin from "@/assets/icon/locationPin.svg";

export const LocationInput = () => {
  return (
    <div className="mt-16">
      <h1 className="text-lg font-bold text-gray-70 mb-4">방문하신 다른 장소가 궁금해요!</h1>
      <div className="flex gap-[2px] items-center border border-gray-10 px-4 py-3 rounded-xl">
        <img src={locationPin} className="w-4 h-4" />
        <input placeholder="장소 검색하기" className="border-none focus:outline-none focus:ring-0" />
      </div>
    </div>
  );
};
