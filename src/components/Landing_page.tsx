// import React from "react";
import styles from "../styles/Landing_page.module.css";
import First_group from "./First_group";
import Second_group from "./Second_group";
import Card_1 from "./cards/Card_1";
import Card_2 from "./cards/Card_2";
import Card_3 from "./cards/Card_3";
import Cohorts from "../assets/Images/Cohorts.png";
import Testimonials from "./Testimonials";

const Slider = () => {
  return (
    <div className={styles.cards}>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <Card_1 />
          </div>
          <div className="slide">
            <Card_2 />
          </div>
          <div className="slide">
            <Card_3 />
          </div>
          <div className="slide">
            <Card_1 />
          </div>
          <div className="slide">
            <Card_2 />
          </div>
          <div className="slide">
            <Card_3 />
          </div>
        </div>
      </div>
    </div>
  );
};


export default () => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.first_block}>
          <First_group />
          <Slider/>
        </section>
        <section className={styles.second_block}>
          <img src={Cohorts} className={styles.Cohorts} alt="Cohorts" />
          <Second_group />
        </section>
        <Testimonials />
      </main>
    </>
  );
};
