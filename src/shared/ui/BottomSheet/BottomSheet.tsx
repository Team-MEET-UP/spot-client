import { useEffect } from "react";
import { useBottomSheetDrag } from "@/shared/hooks/useBottomSheetDrag";
import { Header } from "./Header";
import { Content } from "./Content";
import { Wrapper } from "./Wrapper";

interface BottomSheetProps {
  children: React.ReactNode;
  minHeightVh?: number;
  maxHeightVh?: number;
}

export const BottomSheet = ({ 
  children, 
  minHeightVh = 25, // 기본값 25vh
  maxHeightVh = 80 // 기본값 80vh
}: BottomSheetProps) => {
  const { 
    currentHeight, 
    isDragging, 
    handlers, 
    bindDragEvents,
    handleResize
  } = useBottomSheetDrag({ 
    minHeightVh, 
    maxHeightVh 
  });

  // 드래그 이벤트 바인딩
  useEffect(() => {
    const cleanup = bindDragEvents();
    return () => cleanup();
  }, [bindDragEvents]);

  // 화면 크기 변경 감지
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <Wrapper
      style={{ 
        height: `${currentHeight}px`,
        transition: isDragging ? 'none' : 'height 0.3s ease-out'
      }}
      {...handlers}
    >
      {children}
    </Wrapper>
  );
};

// Compound Components
BottomSheet.Header = Header;
BottomSheet.Content = Content;
