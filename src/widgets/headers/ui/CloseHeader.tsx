import { useNavigate } from "react-router-dom";
import Close from "@/assets/icon/close.svg";

interface CloseHeaderProps {
  url: string;
}

export const CloseHeader = ({ url }: CloseHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-5 py-3 flex justify-end">
      <button
        onClick={() => {
          navigate(url);
        }}>
        <img src={Close} alt="close" />
      </button>
    </header>
  );
};
