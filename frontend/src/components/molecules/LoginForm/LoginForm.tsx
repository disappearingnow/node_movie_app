import { useState, FormEvent } from "react";
import { LabelledTextInput } from "../../atoms/index";
import { InputTypes } from "../../../_shared/enums";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ username, password});
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
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
      <button type="submit">Sign In</button>
    </form>
  );
}
