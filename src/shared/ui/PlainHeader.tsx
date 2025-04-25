import { useNavigate } from "react-router-dom";

interface PlainTextProps {
  url: string;
  title: string;
}

const PlainHeader = ({ url, title }: PlainTextProps) => {
  const navigate = useNavigate();

  return (
    <header className="relative flex w-full px-5 py-3 items-center">
      <img
        src="/icon/back.svg"
        alt="back"
        onClick={() => {
          navigate(url);
        }}
      />
      <span className="absolute top-3 left-1/2 -translate-x-1/2 text-md font-semibold">{title}</span>
    </header>
  );
};

export default PlainHeader;
