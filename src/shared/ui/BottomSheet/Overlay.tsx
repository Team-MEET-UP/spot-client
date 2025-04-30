interface OverlayProps {
  onClick?: () => void;
}

export const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 transition-opacity duration-200 backdrop-blur-sm" onClick={onClick} />
  );
};
