import React from "react"
import Header2 from "./Header2"
import * as styles from "../styles/hamburger.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Subscribe = ({ showModal, open, handleClick, setModal }) => {
  return (
    <section
      style={{
        backgroundColor: "#E5E5E5",
      }}
    >
      <div className={`${styles.profileCard} ${styles.flex}`}>
        <span className={`${styles.closeIcon} ${styles.socialStyle}`}>
          <FontAwesomeIcon
            icon={faTimes}
            size={"2x"}
            onClick={() => {
              setModal(!showModal)
              handleClick(!open)
            }}
          />
        </span>
        <div className={styles.form}>
          <span className={`${styles.iconClass} ${styles.socialStyle}`}>
            <a
              title="Share on Instagram"
              href="https://www.instagram.com/indiainclusionsummit/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} size={"2x"} />
            </a>
            <a
              title="Share on Facebook"
              href="https://www.facebook.com/IndiaInclusionSummit"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} size={"2x"} />
            </a>
            <a
              title="Tweet about this on Twitter"
              href="https://twitter.com/IndiaInclusion"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} size={"2x"} />
            </a>
          </span>

          <div style={{ textAlign: "center" }}>
            <span style={{ position: "relative", top: 10 }}>
              We will notify you whenever there is a new story
            </span>
          </div>
          <form>
            <div className={styles.formControl}>
              <input type="text" name="Email" placeholder="Enter email Id" />
            </div>
            <input type="submit" value="Subscribe" className={styles.btn} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
