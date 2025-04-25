import { useNavigate } from "react-router-dom";

const CloseHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-5 py-3 flex justify-end">
      <img
        src="/icon/close.svg"
        alt="close"
        onClick={() => {
          navigate(-1);
        }}
      />
    </header>
  );
};

export default CloseHeader;
