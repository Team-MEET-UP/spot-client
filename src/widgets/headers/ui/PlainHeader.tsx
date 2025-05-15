import { useNavigate } from "react-router-dom";
import Back from "@/assets/icon/back.svg";

interface PlainHeaderProps {
  title: string;
  onBack?: () => void;
  url?: string;
}

export const PlainHeader = ({ title, onBack, url }: PlainHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (url) {
      navigate(url);
    }
  };

  return (
    <header className="relative flex w-full py-3 items-center">
      <button onClick={handleBack}>
        <img src={Back} alt="back" />
      </button>
      <span className="absolute top-3 left-1/2 -translate-x-1/2 text-md font-semibold">{title}</span>
    </header>
  );
};
