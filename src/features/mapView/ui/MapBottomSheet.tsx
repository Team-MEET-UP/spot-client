import { BottomSheet } from "@/shared/ui";
import { BottomSheetContent, FixedButtons } from "./BottomSheetContent";

export const MapBottomSheet = () => {
  return (
    <>
      <BottomSheet minHeightVh={35} maxHeightVh={80}>
        <BottomSheet.Header />
        <BottomSheet.Content>
          <BottomSheetContent />
          <FixedButtons />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};
