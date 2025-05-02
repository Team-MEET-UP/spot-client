import { useState, useCallback, useRef, useEffect } from "react";

interface UseBottomSheetDragProps {
  minHeightVh: number;
  maxHeightVh?: number;
}

export const useBottomSheetDrag = ({
  minHeightVh = 25, // 기본값 25vh
  maxHeightVh = 80, // 기본값 80vh
}: UseBottomSheetDragProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  
  // vh를 픽셀로 변환하는 함수를 메모이제이션
  const vhToPixels = useCallback((vh: number) => (window.innerHeight * vh) / 100, []);
  const [currentHeight, setCurrentHeight] = useState(() => vhToPixels(minHeightVh));

  // 스크롤 가능한 영역을 ref로 저장
  const scrollableRef = useRef<HTMLElement | null>(null);
  // 최소/최대 높이를 픽셀로 변환한 값을 캐시
  const heightLimitsRef = useRef({
    min: vhToPixels(minHeightVh),
    max: vhToPixels(maxHeightVh)
  });

  // 컴포넌트 마운트 시 한 번만 스크롤 가능한 영역을 찾음
  useEffect(() => {
    scrollableRef.current = document.querySelector("[data-scrollable]");
  }, []);

  const handleDragStart = useCallback((event: React.TouchEvent | React.MouseEvent) => {
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;

    // ref로 저장된 스크롤 가능한 영역의 위치 확인
    if (scrollableRef.current && scrollableRef.current.scrollTop > 0) {
      return;
    }

    setIsDragging(true);
    setStartY(clientY);
  }, []);

  const handleDragMove = useCallback(
    (event: TouchEvent | MouseEvent) => {
      if (!isDragging) return;

      const clientY = "touches" in event ? (event as TouchEvent).touches[0].clientY : (event as MouseEvent).clientY;
      const delta = startY - clientY;
      const newHeight = currentHeight + delta;

      // 캐시된 높이 제한값 사용
      setCurrentHeight(Math.min(Math.max(newHeight, heightLimitsRef.current.min), heightLimitsRef.current.max));
      setStartY(clientY);
    },
    [isDragging, startY, currentHeight]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 이벤트 핸들러 등록/해제
  const bindDragEvents = useCallback(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleDragMove);
      window.addEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // 화면 크기 변경 시 높이 조정
  const handleResize = useCallback(() => {
    setCurrentHeight(vhToPixels(minHeightVh));
    // 높이 제한값도 업데이트
    heightLimitsRef.current = {
      min: vhToPixels(minHeightVh),
      max: vhToPixels(maxHeightVh)
    };
  }, [minHeightVh, maxHeightVh, vhToPixels]);

  return {
    currentHeight,
    isDragging,
    handlers: {
      onMouseDown: handleDragStart,
      onTouchStart: handleDragStart,
    },
    bindDragEvents,
    handleResize,
  };
};
