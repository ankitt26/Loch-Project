import { FC } from 'react';
import styles from "../styles/Frame.module.css";

interface FrameProps {
  value: {
    name: string;
    detail: string;
    para: string;
  };
}

const Frame: FC<FrameProps> = (props) => {
  const { name, detail, para } = props.value;
  return (
      <div className={styles.main}>
        <div className={styles.box}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.detail}>{detail}</p>
        </div>
        <p className={styles.para}>“{para}”</p>
      </div>
  );
};

export default Frame;



