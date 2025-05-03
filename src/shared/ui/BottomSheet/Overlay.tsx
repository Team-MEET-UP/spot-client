interface OverlayProps {
  onClick?: () => void;
  isBlur?: boolean;
}

export const Overlay = ({ onClick, isBlur = true }: OverlayProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black/50 transition-opacity duration-200 ${isBlur && "backdrop-blur-sm"}`}
      onClick={onClick}
    />
  );
};
