import axios from "axios";
import { useEffect, useState } from "react";
import Video from "../../components/video";
import styles from "./HomePage.module.scss";
import { API_KEY } from "../../assets/helpers/constants";
import img from "../../assets/images/header/user.jpg";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const params = useParams();
  const [homeFeed, setHomeFeed] = useState([]);
  if (params.video) {
    document.body.classList.add("sidebarOpen");
  } else {
    document.body.classList.remove("sidebarOpen");
  }
  // useEffect(() => {
  //   axios("https://youtube-v3-alternative.p.rapidapi.com/trending", {
  //     params: {
  //       geo: "UZ",
  //       lang: "en",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": API_KEY,
  //       "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  //     },
  //   }).then((res) => {
  //     console.log(res.data.data);
  //     setHomeFeed(res.data.data);
  //   });
  // });
  return (
    <section className={styles.home}>
      <div className={styles.home__top}></div>
      <div className={styles.home__contents}>
        {/* {homeFeed &&
          homeFeed
            .filter((vd) => vd.type === "video")
            .map((vd) => (
              <Video
                key={Math.random()}
                channelThumbnail={vd.channelThumbnail[0].url}
                channelTitle={vd.channelTitle}
                thumbnail={vd.thumbnail[0].url}
                title={vd.title}
                view={vd.viewCount}
                publishedTimeText={vd.publishedText}
                id={vd.videoId}
              /> */}
        <Video
          key={Math.random()}
          channelThumbnail={img}
          channelTitle={"@frontendwithxurshid"}
          thumbnail={img}
          title={"CRUD application in react"}
          view={"35"}
          publishedTimeText={"1 month ago"}
          id={Math.random()}
        />
        <Video
          key={Math.random()}
          channelThumbnail={img}
          channelTitle={"@frontendwithxurshid"}
          thumbnail={img}
          title={"CRUD application in react"}
          view={"35"}
          publishedTimeText={"1 month ago"}
          id={Math.random()}
        />
        <Video
          key={Math.random()}
          channelThumbnail={img}
          channelTitle={"@frontendwithxurshid"}
          thumbnail={img}
          title={"CRUD application in react"}
          view={"35"}
          publishedTimeText={"1 month ago"}
          id={Math.random()}
        />
        <Video
          key={Math.random()}
          channelThumbnail={img}
          channelTitle={"@frontendwithxurshid"}
          thumbnail={img}
          title={"CRUD application in react"}
          view={"35"}
          publishedTimeText={"1 month ago"}
          id={Math.random()}
        />
        <Video
          key={Math.random()}
          channelThumbnail={img}
          channelTitle={"@frontendwithxurshid"}
          thumbnail={img}
          title={"CRUD application in react"}
          view={"35"}
          publishedTimeText={"1 month ago"}
          id={Math.random()}
        />
        <Video
          key={Math.random()}
          channelThumbnail={img}
          channelTitle={"@frontendwithxurshid"}
          thumbnail={img}
          title={"CRUD application in react"}
          view={"35"}
          publishedTimeText={"1 month ago"}
          id={Math.random()}
        />
        <Video
          key={Math.random()}
          channelThumbnail={img}
          channelTitle={"@frontendwithxurshid"}
          thumbnail={img}
          title={"CRUD application in react"}
          view={"35"}
          publishedTimeText={"1 month ago"}
          id={Math.random()}
        />
        {/* ))} */}
      </div>
    </section>
  );
};

export default HomePage;
