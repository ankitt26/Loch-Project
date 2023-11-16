import styles from "../styles/Testimonials.module.css";
import Vector from "../assets/Images/Vector.png";
import Frame from "./Frame";
export default () => {
  const testimo = [
    {
      name: "Jack F",
      detail: "Ex Blackrock PM",
      para: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
    },
    {
      name: "Yash P",
      detail: "Research, 3poch Crypto Hedge Fund",
      para: `I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!`,
    },
    {
      name: "Shiv S",
      detail: "Co-Founder Magik Labs",
      para: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
    },
  ];

  return (
    <div>
      <h4 className={styles.heading}> Testimonials</h4>
      <hr className={styles.hr} />
      <img src={Vector} className={styles.vector} alt="vector"></img>
      <div className={styles.testimonials}>
        {testimo.map((value, index) => {
          let wern = {
            name: value.name,
            detail: value.detail,
            para: value.para,
          };
          return <Frame key={index} value={wern} />;
        })}
      </div>
    </div>
  );
};
