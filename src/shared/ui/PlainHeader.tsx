import { useNavigate } from "react-router-dom";

interface PlainTextProps {
  title: string;
  url: string;
}

const PlainHeader = ({ title, url }: PlainTextProps) => {
  const navigate = useNavigate();

  return (
    <header className="relative flex w-full px-5 py-3 items-center">
      <button
        onClick={() => {
          navigate(url);
        }}>
        <img src="/icon/back.svg" alt="back" />
      </button>
      <span className="absolute top-3 left-1/2 -translate-x-1/2 text-md font-semibold">{title}</span>
    </header>
  );
};

export default PlainHeader;
