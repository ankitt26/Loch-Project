import styles from '../styles/group.module.css'
import { PiBellBold } from "react-icons/pi";
export default ()=>{
    return(
        <div className={styles.group}>
            <PiBellBold className={styles.bell} />
        <h4 className={styles.primary_text}>Get notified when a highly correlated whale makes a move.</h4>
        <p className={styles.secondary_text}>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
        </div>
    )
}