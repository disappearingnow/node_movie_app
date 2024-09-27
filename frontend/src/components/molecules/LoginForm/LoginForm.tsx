import { useState, useEffect, FormEvent } from "react";
import { LabelledTextInput } from "../../atoms/index";
import { InputTypes } from "../../../_shared/enums";
import styles from "../_shared/form.module.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fetching, setFetching] = useState(false);
  const loginUrl = "http://localhost:4000/login";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFetching(true);
    try {
      const loginAttempt = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!loginAttempt.ok) {
        throw new Error(`Response status: ${loginAttempt.status}`);
      }

      setFetching(false);
    } catch (err) {
      console.error(err);
      setFetching(false);
    }
  }

  useEffect(() => {
    console.log(fetching);
  }, [fetching]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputsContainer}>
        <LabelledTextInput
          labelText="Enter your username"
          id="name"
          type={InputTypes.Text}
          name="name"
          required={true}
          minLength={5}
          maxLength={20}
          value={username}
          setValue={setUsername}
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
      </div>
      <button type="submit" disabled={fetching}>
        Sign In
      </button>
    </form>
  );
}
