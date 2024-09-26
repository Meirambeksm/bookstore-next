"use client";
import s from "./styles.module.css";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/authSlice";

interface LoginProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: FC<LoginProps> = ({ setOpen }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Success:", data);
      dispatch(login(data.token));
      router.push("/profile");
    } else {
      setError(data.message);
    }

    setOpen((prev) => !prev);
    setLoading(false);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!passwordTouched) setPasswordTouched(true);
  };

  return (
    <form className={s.login} onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <div className={s.label}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={s.label}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => setPasswordTouched(true)}
          required
        />
      </div>

      <div className={s.validationWrapper}>
        {passwordTouched && password.length < 6 && (
          <span className={s.validationText}>
            Your password must be at least 6 characters long
          </span>
        )}
      </div>

      {error && <div className={s.error}>{error}</div>}

      <button className={s.loginBtn} type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Log in"}
      </button>
    </form>
  );
};

export default Login;
