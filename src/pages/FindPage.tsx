import { InputField } from "@/features/find/ui";
import { useState } from "react";

const FindPage = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <InputField value={value} placeholder="이름을 입력해주세요." onChange={handleChange} />
    </div>
  );
};

export default FindPage;
