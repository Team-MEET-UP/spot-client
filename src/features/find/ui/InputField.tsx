interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

const InputField = ({ value, onChange, placeholder, error }: InputFieldProps) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-[320px] py-[8px] my-[16px] border-b border-gray-20 placeholder:text-gray-20 focus:border-gray-80 focus:placeholder:text-gray-80 placeholder:text-lg focus:outline-none focus:text-gray-90"
      />
      {error && <p className="text-error text-xs">{error}</p>}
    </div>
  );
};

export { InputField };
