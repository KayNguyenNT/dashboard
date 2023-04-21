import styles from "./login-form.module.scss";
import clsx from "clsx";
import { useRouter } from "next/router";

function LoginForm() {
  const router = useRouter();

  const onHandleLogin = () => {
    router.push("/app-admin/companies");
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={onHandleLogin} className={styles.login}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <img className="w-14 absolute right-8" src="/images/logo.svg" />
      </form>
    </div>
  );
}

export default LoginForm;
