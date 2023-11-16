import styles from '../styles/group.module.css'
import { LuEye } from "react-icons/lu";
export default ()=>{
    return(
        <div className={styles.group_2}>
            <LuEye className={styles.bell} />
        <h4 className={styles.primary_text}>Watch what the whales are doing</h4>
        <p className={styles.secondary_text}>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
        </div>
    )
}