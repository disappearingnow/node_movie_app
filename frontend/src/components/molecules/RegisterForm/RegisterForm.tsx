import { useState, FormEvent } from "react";
import { LabelledTextInput } from "../../atoms/index";
import { InputTypes } from "../../../_shared/enums";
import styles from "../_shared/form.module.css";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ username, email, password, passwordConfirm });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputsContainer}>
        <LabelledTextInput
          labelText="Enter your username"
          id="name"
          type={InputTypes.Text}
          name="name"
          required={true}
          minLength={8}
          maxLength={32}
          value={username}
          setValue={setUsername}
        />
        <LabelledTextInput
          labelText="Enter your email"
          id="email"
          type={InputTypes.Email}
          name="email"
          required={true}
          minLength={8}
          maxLength={32}
          value={email}
          setValue={setEmail}
        />
        <LabelledTextInput
          labelText="Enter your password"
          id="password"
          type={InputTypes.Password}
          name="password"
          required={true}
          minLength={8}
          maxLength={32}
          value={password}
          setValue={setPassword}
        />
        <LabelledTextInput
          labelText="Confirm your password"
          id="password-confirm"
          type={InputTypes.Password}
          name="password-confirm"
          required={true}
          minLength={8}
          maxLength={32}
          value={passwordConfirm}
          setValue={setPasswordConfirm}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
