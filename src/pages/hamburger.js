import React from "react"
import Header from "../components/Header"
import * as styles from "../styles/hamburger.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const HamburgerMenu = ({ location }) => {
  const profileUser = location.state
  console.log(profileUser)
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#E5E5E5",
      }}
    >
      {/* <Header />

      <div className={`${styles.profileCard} ${styles.flex}`}>
        <Link to="/">
          <span className={`${styles.closeIcon} ${styles.socialStyle}`}>
            <FontAwesomeIcon icon={faTimes} size={"2x"} />
          </span>
        </Link>

        <div className={styles.form}>
          <span className={`${styles.iconClass} ${styles.socialStyle}`}>
            <a title="Share on Instagram" href="https://www.instagram.com/indiainclusionsummit/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size={"2x"} />
            </a>
            <a title="Share on Facebook" href="https://www.facebook.com/IndiaInclusionSummit" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size={"2x"} />
            </a>
            <a title="Tweet about this on Twitter" href="https://twitter.com/IndiaInclusion" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size={"2x"} />
            </a>
          </span>

          <form>
            <div className={styles.formControl}>
              <input type="text" name="Email" placeholder="Enter email Id" />
            </div>
            <input type="submit" value="Subscribe" className={styles.btn} />
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "182px",
            }}
          >
            <h2
              style={{
                color: "#51566f",
                borderBottom: "2px solid black",
                fontWeight: "bold",
              }}
            >
              English
            </h2>
            <h2
              style={{
                color: "#51566f",

                fontWeight: "bold",
              }}
            >
              Hindi
            </h2>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default HamburgerMenu
