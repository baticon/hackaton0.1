import React from "react";
import style from "./header.module.css";
import newsStyle from "./news.module.css";
import newsStyle2 from "./news2.module.css";
import { ReactComponent as Logo } from "../../media/seniorLogo.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.navBar}>
      <header className={style.header}>
        <Logo className={style.logo}></Logo>
        <Link className={style.noAccount} to="/about">
          About
        </Link>
        <Link className={style.noAccount} to="/admin">
          Admin
        </Link>
        <div>
          <div className={style.user}>USER</div>
          <span>User name</span>
        </div>
        <Link className={style.noAccount} to="/scoresubmit">
          Submit your score
        </Link>
        <Link className={style.noAccount} to="/registrationparticipants">
          Register for tournament
        </Link>
        <Link className={style.noAccount} to="/">
          Log out
        </Link>
      </header>
      <div className={newsStyle2.tickerwrapperv}>
        <div className={newsStyle2.heading}>Trending Now</div>
        <ul className={newsStyle2.newstickerv}>
          <li className={newsStyle2.newstickervli}>
            <a href="google.com">Saving private Roma, soon in theathers.</a>
          </li>
          <li className={newsStyle2.newstickervli}>
            <a href="google.com">The last news item</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
