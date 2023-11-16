import styles from '../styles/Frame.module.css'
export default (props) => {
    const {name, detail, para} = props.value;
    return(
        <div className={styles.main}>
      <div className={styles.box}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.detail}>{detail}</p>
      </div>
      <p className={styles.para}>{para}</p>
    </div>
    )
}




