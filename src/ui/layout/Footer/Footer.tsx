import logoIcon from "assets/deadful tomatoes.svg";
import googlePlayIcon from "assets/google play.svg";
import appleStoreIcon from "assets/app store.svg";

import "./Footer.scss";

export function Footer(): JSX.Element {
  return (
    <div className="Footer">
      <img className="footer-logo-icon" width={154} src={logoIcon} alt="logo icon" />
      <div className="footer-mobile-icon-container">
      <img width={128} src={appleStoreIcon} alt="apple store icon" />
      <img width={128} src={googlePlayIcon} alt="google play icon" />
      </div>
      <p className="footer-copyright-info">&#169; Copyright 2023 Dreadful tomatoes. All rights reserved.</p>
    </div>
  );
};
