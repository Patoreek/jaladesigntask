import React, { useState } from "react";
import logo from "./logo.svg";
import classes from "./App.module.scss";
import getStartedImg from "./assets/pexels-artem-podrez-5716053.jpg";

import { ReactComponent as FacebookIcon } from "./assets/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "./assets/twitter-icon.svg";
import { ReactComponent as LinkedInIcon } from "./assets/linkedin.svg";
import { ReactComponent as HamburgerMenuSVG } from "./assets/hamburger_menu.svg";
import { ReactComponent as CloseSVG } from "./assets/close.svg";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const navOptions = ["Home", "About Us", "Services", "Portfolio", "Contact"];

  const detailsInfo = [
    {
      title: "Lorem Ipsum Dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laculis eu non diam phasellus. Eu turpis egestas pretium aenean pharetra",
    },
    {
      title: "Lorem Ipsum Dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laculis eu non diam phasellus. Eu turpis egestas pretium aenean pharetra",
    },
    {
      title: "Lorem Ipsum Dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laculis eu non diam phasellus. Eu turpis egestas pretium aenean pharetra",
    },
  ];

  const mobileMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={classes.home}>
      <div className={classes.banner}>
        {/* Navigation is fixed at the top thats why it sits inside the banner DIV */}
        <div className={classes.hamburgerBtn} onClick={mobileMenuHandler}>
          <HamburgerMenuSVG />
        </div>
        <div
          className={`${classes.mobileMenu} ${
            openMenu == true && classes.openMenu
          }`}
        >
          <div className={classes.closeBtn} onClick={mobileMenuHandler}>
            <CloseSVG />
          </div>
          <div className={classes.logo}>
            <span className={classes.logo__logo}>
              Jala <span className={classes.design}>Design.</span>
            </span>
          </div>
          <div className={classes.menu}>
            {navOptions.map((navOption) => (
              <div className={classes.menu__item}>
                <span>{navOption}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.navigationContainer}>
          <div className={classes.navigation}>
            <div className={classes.navigation__left}>
              <div className={classes.logo}>
                <span className={classes.logo__logo}>
                  <b>Jala</b> Design.
                </span>
              </div>
            </div>
            <div className={classes.navigation__right}>
              {navOptions.map((navOption) => (
                <div className={classes.navOption}>{navOption}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.bannerContent}>
          <h1 className={classes.bannerContent__title}>
            Welcome to <span>Lorem Ipsum</span>
          </h1>
          <p className={classes.bannerContent__subtitle}>
            Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className={classes.bannerContent__getStartedBtn}>
            <span className={classes.btnText}>Get Started</span>
          </button>
        </div>
      </div>
      <div className={classes.detailsContainer}>
        <div className={classes.details}>
          <div className={classes.details__top}>
            <h1 className={classes.detailsTitle}>
              Lorem Ipsum <span>dolor sit amet.</span>
            </h1>
            <p className={classes.detailsParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={classes.details__bottom}>
            {detailsInfo.map((detailInfo) => (
              <div className={classes.detail}>
                <h3 className={classes.detail__title}>{detailInfo.title}</h3>
                <p className={classes.detail__content}>{detailInfo.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.getStartedContainer}>
        <div className={classes.getStarted}>
          <div className={classes.getStarted__left}>
            <div className={classes.image}>
              <img src={getStartedImg} className={classes.image__img} />
            </div>
          </div>
          <div className={classes.getStarted__right}>
            <h2 className={classes.title}>
              Lorem Ipsum <b>dolor sit amet.</b>
            </h2>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              laculis eu non diam phasellus. Eu turpis egestas pretium aenean
              pharetra
            </p>
            <div className={classes.getStartedBtnContainer}>
              <button className={classes.getStartedBtnContainer__getStartedBtn}>
                <span className={classes.btnText}>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerContainer}>
        <div className={classes.footer}>
          <div className={classes.footer__left}>
            <span className={classes.logo}>
              Jala <span className={classes.logo__thin}>Design.</span>
            </span>
          </div>
          <div className={classes.footer__middle}>
            <span> &#169;2021 Jala Design. All rights reserved.</span>
          </div>
          <div className={classes.footer__right}>
            <div className={classes.social}>
              <FacebookIcon />
            </div>
            <div className={classes.social}>
              <TwitterIcon />
            </div>
            <div className={classes.social}>
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
