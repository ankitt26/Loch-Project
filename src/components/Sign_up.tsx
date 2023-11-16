import styles from '../styles/Sign_up.module.css'
export default () => {
  const onsignup = () => {};
  return (
    <div className={styles.signup}>
      <form className={styles.signup_detail} onSubmit={onsignup}>
        <h2 className={styles.h2}>Sign up for exclusive access.</h2>
        <input className={styles.input} type="email" placeholder="your email address"></input>
        <button className={styles.button} type="submit">Get Started</button>
        <span className={styles.span}>
          You'll receive an email with an invite link to join.
        </span>
      </form>
    </div>
  );
};
