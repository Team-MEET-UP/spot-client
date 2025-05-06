import { useCallback, useEffect, useRef, useState } from "react";

interface UseSnapPointDragProps {
  snapPoints: number[];
  defaultSnap: number; // snapPoints 배열의 index
}

const vhToPx = (vh: number) => (window.innerHeight * vh) / 100;

export const useSnapPointDrag = ({ snapPoints, defaultSnap }: UseSnapPointDragProps) => {
  const snapHeights = snapPoints.map(vhToPx);
  const [height, setHeight] = useState(snapHeights[defaultSnap] ?? snapHeights[0]);
  const [isDragging, setIsDragging] = useState(false);

  const startY = useRef(0);
  const startHeight = useRef(height);

  // 스크롤 가능한 영역을 ref로 저장
  const scrollableRef = useRef<HTMLElement | null>(null);

  // 컴포넌트 마운트 시 한 번만 스크롤 가능한 영역을 찾음
  useEffect(() => {
    scrollableRef.current = document.querySelector("[data-scrollable]");
  }, []);

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      const maxHeight = Math.max(...snapHeights);
      if (isDragging && height < maxHeight) {
        e.preventDefault(); // 드래그 중일 때 스크롤 막기 + 스냅 포인트 고려
      }
    };
    document.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [isDragging, snapHeights, height]);

  const getClosestSnap = useCallback(
    (h: number) => {
      return snapHeights.reduce((prev, curr) => (Math.abs(curr - h) < Math.abs(prev - h) ? curr : prev));
    },
    [snapHeights]
  );

  const handleDragStart = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      startY.current = clientY;
      startHeight.current = height;
      // ref로 저장된 스크롤 가능한 영역의 위치 확인
      if (scrollableRef.current && scrollableRef.current.scrollTop > 0) {
        return;
      }
      setIsDragging(true);
    },
    [height]
  );

  const handleDragMove = useCallback(
    (e: TouchEvent | MouseEvent) => {
      if (!isDragging) return;

      const clientY = "touches" in e ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
      const delta = startY.current - clientY;
      const newHeight = startHeight.current + delta;

      const min = Math.min(...snapHeights);
      const max = Math.max(...snapHeights);

      setHeight(Math.min(Math.max(newHeight, min), max));
    },
    [isDragging, snapHeights]
  );

  const handleDragEnd = useCallback(() => {
    setHeight(getClosestSnap(height));
    setIsDragging(false);
  }, [height, getClosestSnap]);

  const bindDragEvents = useCallback(() => {
    window.addEventListener("touchmove", handleDragMove);
    window.addEventListener("touchend", handleDragEnd);
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);

    return () => {
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
    };
  }, [handleDragMove, handleDragEnd]);

  return {
    height,
    isDragging,
    handlers: {
      onMouseDown: handleDragStart,
      onTouchStart: handleDragStart,
    },
    bindDragEvents,
  };
};
