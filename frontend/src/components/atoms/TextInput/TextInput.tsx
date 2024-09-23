import styles from './styles.module.css';

export default function TextInput({
    id,
    name,
    required,
    minLength,
    maxLength,
    value,
    setValue,
  }: {
    id: string;
    name: string;
    required: boolean;
    minLength: number;
    maxLength: number;
    value: string;
    setValue: Function;
  }) {
    return (
      <input
        className={styles.textinput}
        type="text"
        value={value}
        id={id}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }