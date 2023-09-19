import styles from "./Sidebar.module.scss";
import Sub1 from "../../assets/images/subscriptions/image 1.png";
import Sub2 from "../../assets/images/subscriptions/image 2.png";
import Sub3 from "../../assets/images/subscriptions/image 3.png";
import Sub4 from "../../assets/images/subscriptions/image 4.png";
import Sub5 from "../../assets/images/subscriptions/image 5.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar__wrapper}>
      <aside className={`${styles.sidebar}`}>
      <div className={styles.sidebar__pages}>
        <div
          className={`${styles.sidebar__pages_tab} ${styles.active} ${styles.tab}`}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z" fill="black" />
            </svg>
          </span>
          Home
        </div>
        <div className={`${styles.sidebar__pages_tab} ${styles.tab}`}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99995 14.65V9.34999L15 12L9.99995 14.65ZM17.77 10.32C17 9.99999 16.57 9.81999 16.57 9.81999L18 9.05999C19.84 8.09999 20.53 5.82999 19.56 3.99999C18.59 2.16999 16.32 1.46999 14.49 2.43999L5.99995 6.93999C4.70995 7.61999 3.92995 8.97999 3.99995 10.43C4.06995 11.85 4.92995 13.1 6.21995 13.68C6.24995 13.69 7.41995 14.18 7.41995 14.18L5.99995 14.93C4.16995 15.9 3.46995 18.17 4.43995 20C5.40995 21.83 7.67995 22.53 9.50995 21.56L18.01 17.06C19.3 16.38 20.07 15.02 20 13.57C19.93 12.15 19.06 10.89 17.77 10.32ZM17.54 16.18L9.03995 20.68C7.69995 21.39 6.02995 20.88 5.31995 19.54C4.60995 18.2 5.11995 16.53 6.45995 15.82L8.49995 14.74V13.53L7.80995 13.25L6.69995 12.79C5.70995 12.38 5.04995 11.44 4.99995 10.38C4.94995 9.31999 5.51995 8.31999 6.45995 7.81999L14.96 3.31999C16.3 2.60999 17.97 3.11999 18.68 4.45999C19.39 5.79999 18.88 7.46999 17.54 8.17999L15.5 9.25999V10.47L17.3 11.21C18.29 11.62 18.95 12.56 19 13.62C19.05 14.68 18.48 15.68 17.54 16.18Z"
                fill="black"
              />
            </svg>
          </span>
          Shorts
        </div>
        <div className={`${styles.sidebar__pages_tab} ${styles.tab}`}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z"
                fill="black"
              />
            </svg>
          </span>
          Subscriptions
        </div>
      </div>
      <div className={styles.sidebar__sections}>
        <div className={`${styles.sidebar__sections_section} ${styles.tab}`}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 7L17 10.5L11 14V7ZM18 20H4V6H3V21H18V20ZM21 18H6V3H21V18ZM7 17H20V4H7V17Z"
                fill="black"
              />
            </svg>
          </span>{" "}
          Library
        </div>
        <div className={`${styles.sidebar__sections_section} ${styles.tab}`}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.97 16.95L9.99996 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM22 12C22 17.51 17.51 22 12 22C6.48996 22 1.99996 17.51 1.99996 12H2.99996C2.99996 16.96 7.03996 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C8.80996 3 5.91996 4.64 4.27996 7.38C4.16996 7.56 4.05996 7.75 3.96996 7.94C3.95996 7.96 3.94996 7.98 3.93996 8H7.99996V9H1.95996V3H2.95996V7.74C2.99996 7.65 3.02996 7.57 3.06996 7.49C3.17996 7.27 3.29996 7.07 3.41996 6.86C5.21996 3.86 8.50996 2 12 2C17.51 2 22 6.49 22 12Z"
                fill="black"
              />
            </svg>
          </span>{" "}
          History
        </div>
        <div className={`${styles.sidebar__sections_section} ${styles.tab}`}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 8L16 12L10 16V8ZM21 3V21H3V3H21ZM20 4H4V20H20V4Z"
                fill="black"
              />
            </svg>
          </span>{" "}
          Your videos
        </div>
        <div className={`${styles.sidebar__sections_section} ${styles.tab}`}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z"
                fill="black"
              />
            </svg>
          </span>{" "}
          Watch later
        </div>
        <div className={`${styles.sidebar__sections_section} ${styles.tab}`}>
          <span>
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
              <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
            </svg>
          </span>{" "}
          Liked videos
        </div>
        <div className={`${styles.sidebar__pages_tab} ${styles.tab}`}>
          <span>
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
              <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
            </svg>
          </span>
          Show more
        </div>
      </div>
      <div className={styles.sidebar__subscriptions}>
        <p>Subscriptions</p>
        <div
          className={`${styles.sidebar__subscriptions_subscription} ${styles.tab}`}
        >
          <span>
            <img src={Sub1} alt="" />
          </span>{" "}
          FC Barcelona{" "}
          <div className={styles.dot}>
            <span></span>
          </div>
        </div>
        <div
          className={`${styles.sidebar__subscriptions_subscription} ${styles.tab}`}
        >
          <span>
            <img src={Sub2} alt="" />
          </span>{" "}
          TED{" "}
          <div className={styles.dot}>
            <span></span>
          </div>
        </div>
        <div
          className={`${styles.sidebar__subscriptions_subscription} ${styles.tab}`}
        >
          <span>
            <img src={Sub3} alt="" />
          </span>{" "}
          NNGroup{" "}
          <div className={styles.dot}>
            <span></span>
          </div>
        </div>
        <div
          className={`${styles.sidebar__subscriptions_subscription} ${styles.tab}`}
        >
          <span>
            <img src={Sub4} alt="" />
          </span>{" "}
          Ed Sheeran{" "}
          <div className={styles.dot}>
            <span></span>
          </div>
        </div>
        <div
          className={`${styles.sidebar__subscriptions_subscription} ${styles.tab}`}
        >
          <span>
            <img src={Sub5} alt="" />
          </span>{" "}
          FIFA{" "}
          <div className={styles.dot}>
            <span></span>
          </div>
        </div>
      </div>
    </aside>
    </div>
  );
};

export default Sidebar;
