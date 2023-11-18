import { SetStateAction, useState } from "react";
import styles from "../styles/Sign_up.module.css";

export default () => {
  const [email, setemail] = useState("");

  const onsignup = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    window.location.href = "https://app.loch.one/welcome";
    console.log(email);
  };

  const set_email = (event: {
    target: { value: SetStateAction<string> };
    preventDefault: () => void;
  }) => {
    setemail(event.target.value);
    event.preventDefault();
  };

  return (
    <div className={styles.signup} id='signup'>
      <form className={styles.signup_detail} onSubmit={onsignup}>
        <h2 className={styles.h2}>Sign up for exclusive access.</h2>
        <input
          className={styles.input}
          type="email"
          placeholder="your email address"
          onChange={set_email}
          value={email}
          required
        ></input>
        <button className={styles.button} type="submit">
          Get Started
        </button>
        <span className={styles.span}>
          You'll receive an email with an invite link to join.
        </span>
      </form>
    </div>
  );
};
