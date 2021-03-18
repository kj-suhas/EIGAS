import React from "react"
import * as styles from "../styles/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDove, faExpand } from "@fortawesome/free-solid-svg-icons"
import bird from "../assets/bird.png"
import { Link } from "gatsby"
import HeaderHamburger from "../assets/hamburger.png"

const Header = ({ userData }) => {
  console.log(userData)
  let name = userData?.data.Name.toLowerCase().trim()
  let nameDesktop = name?.split(" ")
  let nameMobile = name?.split(" ")[0]

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
          <Link to="/">
            <img
              src={bird}
              alt="Logo of Everyone is good at something"
              className={styles.logoContainer}
            />
          </Link>

          <h2 className={styles.mediah2}>{nameMobile}</h2>
          <h2 className={styles.headerh2}>
            {nameDesktop?.map((word, i) => (
              <span key={i}>
                {" "}
                {word}{" "}
                {i !== nameDesktop.length - 1 && (
                  <div className={styles.headerDot}></div>
                )}
              </span>
            ))}
          </h2>
        </div>
        {/* <h2 className={styles.headerh1}>
          {userData?.data.Name}
        </h2> */}
        <ul>
          <li>
            <h1
              style={
                {
                  // marginRight: "30px",
                }
              }
            >
              <Link
                style={
                  {
                    // marginBottom: "20px",
                  }
                }
                to="/#allstories"
              >
                All
              </Link>
            </h1>
          </li>

          <li>
            <img className={styles.hamburger} src={HeaderHamburger} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header
