// BottomSheet.tsx
import { useEffect } from "react";

import { Portal } from "../Portal";

import { SnapWrapper } from "./SnapWrapper";
import { SnapHeader } from "./SnapHeader";
import { SnapContent } from "./SnapContent";
import { useSnapPointDrag } from "@/shared/hooks";

interface BottomSheetProps {
  children: React.ReactNode;
  snapPoints?: number[]; // [30, 60, 80]
  defaultSnap?: number; // 기본 스냅 포인트
}

export const SnapBottomSheet = ({
  children,
  snapPoints = [30, 60, 80],
  defaultSnap = 0,
}: BottomSheetProps) => {
  const { height, isDragging, handlers, bindDragEvents } = useSnapPointDrag({
    snapPoints,
    defaultSnap,
  });

  // 바인딩 이벤트 설정
  useEffect(() => {
    const cleanup = bindDragEvents();
    return () => cleanup();
  }, [bindDragEvents]);

  return (
    <Portal>
      <SnapWrapper
        style={{
          height: `${height}px`,
          transition: isDragging ? "none" : "height 0.3s ease",
        }}
        {...handlers}
      >
        {children}
      </SnapWrapper>
    </Portal>
  );
};

SnapBottomSheet.Header = SnapHeader;
SnapBottomSheet.Content = SnapContent;
