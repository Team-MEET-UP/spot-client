import { useEffect, useRef, useState } from "react";
import { Portal } from "../Portal";

import { SnapWrapper } from "./SnapWrapper";
import { SnapHeader } from "./SnapHeader";
import { SnapContent } from "./SnapContent";
import { useSnapPointDrag } from "@/shared/hooks";

interface BottomSheetProps {
  children: React.ReactNode;
  snapPoints?: number[];
  defaultSnap?: number;
}

export const SnapBottomSheet = ({ children, snapPoints = [30, 50, 80], defaultSnap = 0 }: BottomSheetProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [dynamicSnapPoints, setDynamicSnapPoints] = useState(snapPoints);

  // ResizeObserver를 사용하여 콘텐츠 높이 측정
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const contentHeight = entry.contentRect.height;
        const viewportHeight = window.innerHeight;

        console.log("콘텐츠 높이:", contentHeight, "px");
        console.log("뷰포트 높이:", viewportHeight, "px");
        console.log("콘텐츠 높이를 기반으로 vh 계산", (contentHeight / viewportHeight) * 100, "vh");

        // 콘텐츠 높이를 기반으로 동적 snap points 계산
        const small = 35; // 지도에 맞춰 최소 35vh를 유지한다.
        const middle = Math.min(50, ((contentHeight * 0.7) / viewportHeight) * 100);
        const large = Math.min(80, ((contentHeight * 0.9) / viewportHeight) * 100);

        console.log("Calculated snap points:", { small, middle, large });

        setDynamicSnapPoints([small, middle, large]);
      }
    });

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const { height, isDragging, handlers, bindDragEvents } = useSnapPointDrag({
    snapPoints: dynamicSnapPoints,
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
        {...handlers}>
        {children}
        <div ref={contentRef} className="absolute opacity-0 pointer-events-none">
          {children}
        </div>
      </SnapWrapper>
    </Portal>
  );
};

SnapBottomSheet.Header = SnapHeader;
SnapBottomSheet.Content = SnapContent;
