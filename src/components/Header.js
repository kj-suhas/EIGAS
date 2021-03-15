import React from "react"
import * as styles from "../styles/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDove, faExpand } from "@fortawesome/free-solid-svg-icons"

const Header = ({ userData }) => {
  console.log(userData)
  return (
    <section className={styles.navbar}>
      <div
        className={`${styles.navCont} ${styles.navFlex}`}
      >
        <FontAwesomeIcon icon={faDove} size={"3x"} color={"red"} />

        {/* <div className={styles.h2Div}> */}
        <h2 className={styles.headerh1}>
          {/* everyone <div className={styles.headerDot}></div> is{" "}
          <div className={styles.headerDot}></div> good{" "}
          <div className={styles.headerDot}></div> at{" "}
          <div className={styles.headerDot}></div> something */}
          {userData?.data.Name}
        </h2>
        {/* </div> */}

        <ul>
          <h1
            style={{
              position: "relative",
              top: "5px",
              left: "-139px",
              fontSize: "30px",   
              fontWeight: "lighter",
            }}
          >
            {" "}
            {}
          </h1>
          <h1
            style={{
              marginRight: "30px",
            }}
          >
            <FontAwesomeIcon icon={faExpand} size={"2x"} />
          </h1>
          <h1>
            <FontAwesomeIcon
              icon={faExpand}
              size={"2x"}
              onClick={() => console.log("display hamMenu")}
            />
          </h1>
        </ul>
      </div>
    </section>
  )
}

export default Header
