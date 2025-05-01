import { BottomSheet } from "@/shared/ui";
import { FixedButtons } from "./BottomSheetContent";
import { Overlay } from "@/shared/ui/BottomSheet/Overlay";

export const AddMemberBottomSheet = () => {
  return (
    <>
      <Overlay />
      <BottomSheet minHeightVh={40} maxHeightVh={40}>
        <BottomSheet.Header />
        <BottomSheet.Content>
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-gray-80 font-bold text-lg">멤버를 추가해보세요</h1>
            <p className="text-gray-40 text-sm">중간 지점을 찾으려면 멤버가 더 필요해요</p>
          </div>
          <FixedButtons />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};
