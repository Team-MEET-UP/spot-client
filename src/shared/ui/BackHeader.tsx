import { useNavigate } from "react-router-dom";

const BackHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-5 py-3">
      <img
        src="/icon/back.svg"
        alt="back"
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};

export default BackHeader;
