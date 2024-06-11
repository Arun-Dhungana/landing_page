"use client";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shownav, setShownav] = useState(false);
  const [showSearchBar, setshoeSearchBar] = useState(false);
  const [showNavBar, setshowNavBar] = useState(false);
  return (
    <header className="header">
      {/* large screen navbar */}
      <nav className="header_navbar">
        <ul>
          <li>
            <Image
              height={48}
              width={160}
              src="/images/Company logo.png"
            ></Image>
          </li>

          <li>Home</li>
          <li>About Us</li>
          <li>Case Studies</li>
          <li>
            <div className="resources">
              <div
                className="resource-navbar"
                onClick={() => {
                  setshowNavBar(!showNavBar);
                }}
              >
                Resources <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </div>
              <div className={showNavBar ? "resource-dropdown" : "close"}>
                <div className="resource-items">
                  <div
                    className="resource-item"
                    onClick={() => {
                      setshowNavBar(false);
                    }}
                  >
                    <div className="resource-icon">
                      <MobileFriendlyIcon></MobileFriendlyIcon>
                    </div>
                    <div className="resource-content">
                      <h4>Blog</h4>
                      <p>The latest industry news and info.</p>
                    </div>
                  </div>
                  <div
                    className="resource-item"
                    onClick={() => {
                      setshowNavBar(false);
                    }}
                  >
                    <div className="resource-icon">
                      <FlashOnIcon></FlashOnIcon>
                    </div>
                    <div className="resource-content">
                      <h4>Customer stories</h4>
                      <p>Learn how our customer are making big changes.</p>
                    </div>
                  </div>
                  <div
                    className="resource-item"
                    onClick={() => {
                      setshowNavBar(false);
                    }}
                  >
                    <div className="resource-icon">
                      <SlowMotionVideoIcon></SlowMotionVideoIcon>
                    </div>
                    <div className="resource-content">
                      <h4>Video Tutorials</h4>
                      <p>Get up and running on new features and techniques.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <span>
          <SearchIcon
            onClick={() => {
              setshoeSearchBar(!showSearchBar);
            }}
          ></SearchIcon>
        </span>
      </nav>
      {/* small navbar */}
      <nav className="header_navbar_small">
        <Image height={48} width={160} src="/images/Company logo.png"></Image>

        <div className="navbar-search">
          <input name="search" placeholder="Search..."></input>
          <SearchIcon></SearchIcon>
        </div>

        <button
          type="button"
          className={isOpen ? "close" : "open"}
          onClick={() => setShownav(!shownav)}
        >
          <MenuIcon></MenuIcon>
        </button>
      </nav>
      <div
        className={shownav ? "navbar-offcanvas-show" : "navbar-offcanvas-hide"}
      >
        <ul>
          <div className="offcanvas-header">
            <Image
              height={48}
              width={160}
              src="/images/Company logo.png"
            ></Image>

            <button
              type="button"
              className={isOpen ? "open" : "close"}
              onClick={() => setShownav(!shownav)}
            >
              <CloseIcon></CloseIcon>
            </button>
          </div>
          <li>Home</li>
          <li>About Us</li>
          <li>Case Studies</li>
          <li>
            Resources <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </li>
        </ul>
      </div>

      {/* header content */}

      <div className="header_content">
        {/* {search bar} */}
        <div className={showSearchBar ? "searchbar" : "close"}>
          <div className="searchbox" id="searchbar">
            <input type="text" placeholder="Search..."></input>
            <div className="search-icon">
              <SearchIcon></SearchIcon>
            </div>
            <div
              className="close-icon"
              onClick={() => {
                setshoeSearchBar(false);
              }}
            >
              <CancelIcon></CancelIcon>
            </div>
          </div>
        </div>
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 ups.
        </p>
        <button type="button">
          Why Catalog?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={16}
            height={16}
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              fill="white"
            />
          </svg>{" "}
        </button>
      </div>
    </header>
  );
};
