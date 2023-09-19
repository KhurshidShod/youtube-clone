import { useParams } from "react-router-dom"
import styles from './VideoPage.module.scss'
import ReactPlayer from "react-player"

const VideoPage = () => {
  const params = useParams()
  if(params.video){
    document.body.classList.add('sidebarOpen')
  }
  console.log(params)
  return (
    <div className={styles.video__page}>
      <div className={styles.video__page_left}>
        <div className="video">
          <ReactPlayer url={`https://youtube.com/watch?v=${params.video}`} />
        </div>
      </div>
      <div className={styles.video__page_right}></div>
    </div>
  )
}

export default VideoPage