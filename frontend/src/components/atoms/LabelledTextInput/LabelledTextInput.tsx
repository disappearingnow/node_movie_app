import { ChangeEvent, Dispatch } from "react";
import { InputTypes } from "../../../_shared/enums";
import styles from "./styles.module.css";
interface Interface {
  name: string;
  id: string;
  type: InputTypes;
  labelText: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  minLength: number;
  maxLength: number;
  required: boolean;
}

export default function LabelledTextInput({
  name,
  id,
  labelText,
  type,
  value,
  setValue,
  minLength,
  maxLength,
  required,
}: Interface) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
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
