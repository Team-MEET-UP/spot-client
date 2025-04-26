interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputField = ({ value, onChange, placeholder }: InputFieldProps) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-[320px] py-[8px] border-b border-gray-20 placeholder:text-gray-20 focus:border-gray-80 focus:placeholder:text-gray-80 placeholder:text-lg focus:outline-none focus:text-gray-90"
      />
    </div>
  );
};

export { InputField };
