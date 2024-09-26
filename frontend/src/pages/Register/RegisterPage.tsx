import { RegisterForm } from "../../components/molecules";
import styles from "../_shared/formpage.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.formpage}>
      <RegisterForm />
    </div>
  );
}
