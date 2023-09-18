import Video from "../../components/video"
import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <section className={styles.home}>
      <div className={styles.home__top}>
        
      </div>
      <div className={styles.home__contents}>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </section>
  )
}

export default HomePage