import styles from './Video.module.scss'
import Img from '../../assets/images/header/user.jpg'

const Video = () => {
  return (
    <div className={styles.video}>
        <div className={styles.video__thumbnail}>
            <img src={Img} alt="" />
        </div>
        <div className={styles.video__infos}>
            <div className={styles.video__infos_poster}>
                <img src={Img} alt="" />
            </div>
            <div className={styles.video__infos_info}>
                <div className={styles.title}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita cupiditate sed quo quidem! Error dolorum fuga accusamus. Nam deserunt suscipit ex, ratione magnam incidunt dolor?</p>
                </div>
                <div className={styles.poster_name}>
                    <p>ACTIVIST</p>
                </div>
                <div className={styles.stats}>
                    <p>1.4M views</p> <span></span> <p>1 year ago</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video