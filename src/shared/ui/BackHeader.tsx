import { useNavigate } from "react-router-dom";

interface BackHeaderProps {
  url: string;
}

const BackHeader = ({ url }: BackHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-5 py-3">
      <button
        onClick={() => {
          navigate(url);
        }}>
        <img src="/icon/back.svg" alt="back" />
      </button>
    </header>
  );
};

export default BackHeader;
