interface FixedButtonProps {
  type: "subway" | "car";
  setType: React.Dispatch<React.SetStateAction<"subway" | "car">>;
}

export const FixedButton = ({ type, setType }: FixedButtonProps) => {
  const options: { key: "subway" | "car"; label: string; icon: string; iconGray: string }[] = [
    {
      key: "subway",
      label: "대중교통",
      icon: "/icon/subway.svg",
      iconGray: "/icon/subwayGray.svg",
    },
    {
      key: "car",
      label: "자가용",
      icon: "/icon/car.svg",
      iconGray: "/icon/carGray.svg",
    },
  ];

  return (
    <div className="flex px-5 py-3 fixed bottom-0 left-0 w-full">
      {options.map(({ key, label, icon, iconGray }) => {
        const isActive = type === key;
        return (
          <button
            key={key}
            className={`flex gap-1 items-center w-1/2 justify-center text-md py-2 transition-all ${
              isActive ? "font-semibold text-white rounded-[50px] bg-gray-90" : "font-medium text-gray-30"
            }`}
            onClick={() => setType(key)}>
            <img src={isActive ? icon : iconGray} alt={label} />
            {label}
          </button>
        );
      })}
    </div>
  );
};
