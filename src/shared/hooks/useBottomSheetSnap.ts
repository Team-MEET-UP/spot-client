import { useCallback, useEffect, useRef, useState } from "react";

interface UseSnapPointDragProps {
  snapPoints: number[]; // vh 단위, 예: [30, 60, 80]
  defaultSnap: number;  // snapPoints 배열의 index
}

const vhToPx = (vh: number) => (window.innerHeight * vh) / 100;

export const useSnapPointDrag = ({ snapPoints, defaultSnap }: UseSnapPointDragProps) => {
  const snapHeights = snapPoints.map(vhToPx);
  const [height, setHeight] = useState(snapHeights[defaultSnap] ?? snapHeights[0]);
  const [isDragging, setIsDragging] = useState(false);

  const startY = useRef(0);
  const startHeight = useRef(height);

  const getClosestSnap = useCallback((h: number) => {
    return snapHeights.reduce((prev, curr) =>
      Math.abs(curr - h) < Math.abs(prev - h) ? curr : prev
    );
  }, [snapHeights]);

  const handleDragStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    startY.current = clientY;
    startHeight.current = height;
    setIsDragging(true);
  }, [height]);

  const handleDragMove = useCallback((e: TouchEvent | MouseEvent) => {
    if (!isDragging) return;

    const clientY = "touches" in e ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
    const delta = startY.current - clientY;
    const newHeight = startHeight.current + delta;

    const min = Math.min(...snapHeights);
    const max = Math.max(...snapHeights);

    setHeight(Math.min(Math.max(newHeight, min), max));
  }, [isDragging, snapHeights]);

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
