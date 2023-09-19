import styles from "./Video.module.scss";
import PropTypes from "prop-types";
import img from '../../assets/images/header/user.jpg'
import { useNavigate } from "react-router-dom";

const Video = ({
  channelThumbnail,
  channelTitle,
  thumbnail,
  title,
  views,
  publishedTimeText,
  id
}) => {
  const navigate = useNavigate()
  return (
    <div className={styles.video} onClick={() => navigate(`/watch/${id}`)}>
      <div className={styles.video__thumbnail}>
        <img src={img} alt="" />
      </div>
      <div className={styles.video__infos}>
        <div className={styles.video__infos_poster}>
          <img src={channelThumbnail[0].url} alt="" />
        </div>
        <div className={styles.video__infos_info}>
          <div className={styles.title}>
            <p>{title}</p>
          </div>
          <div className={styles.poster_name}>
            <p>{channelTitle}</p>
          </div>
          <div className={styles.stats}>
            <p>{views}</p> <span></span> <p>{publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Video.propTypes = {
  channelThumbnail: PropTypes.string,
  channelTitle: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  views: PropTypes.string,
  publishedTimeText: PropTypes.string,
  id: PropTypes.string
};

export default Video;
