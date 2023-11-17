import styles from "../styles/Testimonials.module.css";
import Vector from "../assets/Images/Vector.png";
import Frame from "./Frame";

const Carousel = () => {
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
    <div id="carouselExampleAutoplaying" className="carousel slide"  data-bs-ride="carousel">
      <div className="carousel-inner">
        {testimo.map((value, index) => {
          let wern = {
            name: value.name,
            detail: value.detail,
            para: value.para,
          };

          if (index == 0) {
            return (
              <div className="carousel-item active" data-bs-interval="3000">
                <Frame key={index} value={wern} />
              </div>
            );
          } else {
            return (
              <div className="carousel-item"  data-bs-interval="3000" >
                <Frame key={index} value={wern} />
              </div>
            );
          }
        })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
  );
};

export default () => {
  return (
    <div>
      <h4 className={styles.heading}> Testimonials</h4>
      <hr className={styles.hr} />
      <img src={Vector} className={styles.vector} alt="vector"></img>
      <div className={styles.testimonials}>
        <Carousel />
      </div>
    </div>
  );
};
