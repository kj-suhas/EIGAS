import React, { useState } from "react"
import * as styles from "../styles/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDove, faExpand } from "@fortawesome/free-solid-svg-icons"
import bird from "../assets/bird.png"
import { Link } from "gatsby"
import HeaderHamburger from "../assets/hamburger.png"
import HamburgerMenu from "react-hamburger-menu"

const Header2 = ({ showModal, setModal, open, handleClick }) => {
  return (
    <section className={styles.navbar}>
      <div className={`${styles.navCont} ${styles.navFlex}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px",
            fontSize: "31px",
            fontWeight: "bolder",
          }}
        >
          <img
            src={bird}
            alt="Logo of Everyone is good at something"
            className={styles.logoContainer}
          />
          <h2 className={styles.mediah2}>
            e <div className={styles.headerDot}></div> i{" "}
            <div className={styles.headerDot}></div> g{" "}
            <div className={styles.headerDot}></div> a{" "}
            <div className={styles.headerDot}></div> s
          </h2>
          <h2 className={styles.headerh2}>
            everyone <div className={styles.headerDot}></div> is{" "}
            <div className={styles.headerDot}></div> good{" "}
            <div className={styles.headerDot}></div> at{" "}
            <div className={styles.headerDot}></div> something
          </h2>
        </div>
        <ul>
          <li>
            <img
              className={styles.hamburger}
              src={HeaderHamburger}
              onClick={() => {
                setModal(!setModal)
                handleClick(!open)
              }}
            />
          </li>
        </ul>
        <div className={styles.hamMenu}>
          <ul>
            <li>
              {/* <img
              className={styles.hamburger}
              src={HeaderHamburger}
              onClick={() => setModal(!setModal)}
            /> */}

              <HamburgerMenu
                isOpen={open}
                menuClicked={() => {
                  handleClick()
                  setModal(!setModal)
                }}
                width={30}
                height={25}
                strokeWidth={1}
                rotate={0}
                color="black"
                borderRadius={0}
                animationDuration={0.5}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Header2
