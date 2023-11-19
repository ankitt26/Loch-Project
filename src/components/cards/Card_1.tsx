import { LuBell } from "react-icons/lu";
import styles from "../../styles/Card.module.css";
import { useState } from "react";

export default () => {
  const [email, setemail] = useState();

  const email_value = (event: { target: { value: any } }) => {
    setemail(event.target.value);
  };

  const getemail = () => {};

  return (
    <form className={styles.card} onSubmit={getemail}>
      <button type="submit" className={styles.save}>
        Save
      </button>

      <LuBell className={styles.bell} />
      <p className={styles.para}>We'll be sending notifications to you here</p>
      <input
        type="email"
        className={styles.input}
        onChange={email_value}
        value={email}
        placeholder='hello@loch.one'
      ></input>
    </form>
  );
};
