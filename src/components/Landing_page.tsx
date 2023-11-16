// import React from "react";
import styles from "../styles/Landing_page.module.css";
import First_group from './First_group';
import Second_group from './Second_group';
import Card_1 from './cards/Card_1';
import Card_2 from './cards/Card_2';
import Card_3 from './cards/Card_3';
export default () => {
  return (
    <>
      <div className={styles.main}>
        <First_group/>
        <Card_1/>
        <Card_2/>
        <Card_3/>
        <Second_group/>
      </div>
    </>
  );
};
