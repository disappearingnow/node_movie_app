import { ChangeEvent, Dispatch } from "react";

export default function LabelledTextInput({
  name,
  id,
  labelText,
  value,
  setValue,
  minLength,
  maxLength,
  required,
}: {
  name: string;
  id: string;
  labelText: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  minLength: number;
  maxLength: number;
  required: boolean;
}) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
}
