import { LoginForm } from "../../components/molecules";
import styles from "../_shared/formpage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.formpage}>
      <LoginForm />
    </div>
  );
}
