import { SnapBottomSheet } from "@/shared/ui";
import { BottomSheetContent, FixedButtons } from "./BottomSheetContent";


export const SnapMapBottomSheet = () => {
    return (
      <SnapBottomSheet snapPoints={[35, 60, 80]} defaultSnap={0}>
        <SnapBottomSheet.Header />
        <SnapBottomSheet.Content>
          <BottomSheetContent />
          <FixedButtons />
        </SnapBottomSheet.Content>
      </SnapBottomSheet>
    );
  };