import { useParams } from "react-router-dom"
import styles from './VideoPage.module.scss'

const VideoPage = () => {
  const params = useParams()
  if(params.video){
    document.body.classList.add('sidebarOpen')
  }
  console.log(params)
  return (
    <div className={styles.video__page}>VideoPage</div>
  )
}

export default VideoPage