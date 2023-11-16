import styles from '../styles/Testimonials.module.css'
import Vector from '../assets/Images/Vector.png'
export default ()=>{
    return(
        <div>
    <h4 className={styles.heading}> Testimonials</h4>
    <hr className={styles.hr}/>
<img src={Vector} className={styles.vector} alt="vector"  ></img>
        </div>
    )
}