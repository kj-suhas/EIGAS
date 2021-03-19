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

const Subscribe = ({ showModal, setModal }) => {
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
            onClick={() => setModal(!showModal)}
          />
        </span>
        <div className={styles.form}>
          <span className={`${styles.iconClass} ${styles.socialStyle}`}>
            <FontAwesomeIcon icon={faInstagram} size={"2x"} />
            <FontAwesomeIcon icon={faFacebook} size={"2x"} />
            <FontAwesomeIcon icon={faTwitter} size={"2x"} />
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
      </div>
    </section>
  )
}

export default Subscribe
