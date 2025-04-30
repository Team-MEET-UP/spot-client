interface OverlayProps {
  onClick?: () => void;
}

export const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClick}
    />
  );
};
