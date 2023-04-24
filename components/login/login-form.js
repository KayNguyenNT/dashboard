import styles from "./login-form.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();

  const onHandleLogin = (e) => {
    e.preventDefault();
    router.push("/app-admin/companies", undefined, { shallow: true });
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={onHandleLogin} className={styles.login}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <Image
          className="absolute right-8"
          src="/images/logo.svg"
          alt="Logo"
          width={50}
          height={50}
        />
      </form>
    </div>
  );
}

export default LoginForm;
