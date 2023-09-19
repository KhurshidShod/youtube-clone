import { GoSearch } from "react-icons/go";
import { HiMiniMicrophone } from "react-icons/hi2";
import Logo from "../../assets/images/logo.svg";
import AddVideoImage from "../../assets/images/header/addVideo.svg";
import NotificationImage from "../../assets/images/header/notification.svg";
import UserImage from "../../assets/images/header/user.jpg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.nav__left}>
          <div className={styles.nav__left_toggle} onClick={() => document.body.classList.toggle('sidebarOpen')}>
            {/* <LiaBarsSolid size={25} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 6H3V5H21V6ZM21 11H3V12H21V11ZM21 17H3V18H21V17Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={styles.nav__left_logo}>
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className={styles.nav__search}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Search" name="" id="" />
            <span>
              <GoSearch size={23} />
            </span>
          </div>
          <div className={styles.microphone}>
            <HiMiniMicrophone size={20} />
          </div>
        </div>
        <div className={styles.nav__right}>
          <div className={styles.addVideoImage}>
            <img src={AddVideoImage} alt="" />
          </div>
          <div className={styles.notificationImage}>
            <img src={NotificationImage} alt="" />
          </div>
          <div className={styles.userImage}>
            <img src={UserImage} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
