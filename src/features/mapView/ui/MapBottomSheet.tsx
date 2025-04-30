import { BottomSheet } from "@/shared/ui";

export const MapBottomSheet = () => {
  return (
    <BottomSheet minHeightVh={25}>
      <BottomSheet.Header />
      <BottomSheet.Content>
        <div className="p-4">
          안녕하세요
        </div>
      </BottomSheet.Content>
    </BottomSheet>
  );
};
